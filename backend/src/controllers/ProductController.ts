import { Request, RequestHandler, Response } from 'express';
import Product from '../models/productSchema';
import ProductImage from '../models/productImage';

export const createProduct: RequestHandler = async (req , res, next) => {
    try {
        const { name, price, description } = req.body;
        const imageArray = req.files ? (req.files as Express.Multer.File[]).map(file => ({
            url: file.path,
            caption: file.originalname,
        })) : [];

        const newProduct = new Product({ name, price, description, images: imageArray });
        const savedProduct = await newProduct.save();
            
        res.status(201).json({
            message: 'Product and images uploaded successfully',
            product: savedProduct
        });
    } catch (error) {
      next(error)
    }
};

export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.find().populate('images');
        res.json(products);
    } catch (error) {
        res.status(500).json({
            message: error instanceof Error ? error.message : 'An unknown error occurred'
        });
    }
};

export const deleteProduct = async (req: Request, res: Response) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        if (!deletedProduct) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            await ProductImage.deleteMany({ product: deletedProduct._id });
            res.json({ message: 'Product and associated images deleted' });
        }
    } catch (error) {
        res.status(500).json({
            message: error instanceof Error ? error.message : 'An unknown error occurred'
        });
    }
};

export const getProductById = async (req: Request, res: Response) => {
    try {
        const product = await Product.findById(req.params.id).populate('images');
        if (!product) {
            res.status(404).json({ message: 'Product not found' });
        } else {
            res.json(product);
        }
    } catch (error) {
        res.status(500).json({
            message: error instanceof Error ? error.message : 'An unknown error occurred'
        });
    }
};

export const updateProduct = async (req: Request, res: Response) => {
    try {
        const { name, price, description } = req.body;

        if (!name || !price || !description) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const product = await Product.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        product.name = name;
        product.price = price;
        product.description = description;

        if (Array.isArray(req.files) && req.files.length > 0) {
            product.images = (req.files as Express.Multer.File[]).map((file) => ({
                url: file.path
            }));
        } else if (req.body.images === '') {
            product.images = [];
        }

        await product.save();
        res.json(product);
    } catch (error) {
        res.status(500).json({
            message: error instanceof Error ? error.message : 'An unknown error occurred'
        });
    }
};