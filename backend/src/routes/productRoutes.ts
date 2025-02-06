

import express from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
} from '../controllers/ProductController';

const router = express.Router();

const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir);
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage }).array('images', 10);

// Routes
router.post('/products', upload, createProduct);
router.get('/products', getAllProducts);
router.get('/products/:id', getProductById);
//router.put('/products/:id', upload, updateProduct);
router.delete('/products/:id', deleteProduct);

export default router;






// import express, { Request, Response } from 'express';
// // import { ParamsDictionary } from 'express-serve-static-core';
// import Product from '../models/productSchema';

// import ProductImage from '../models/productImage';


// import multer from 'multer';
// import path from 'path';
// import fs from 'fs';

// const router = express.Router();

// const uploadDir = path.join(__dirname, 'uploads');
// if (!fs.existsSync(uploadDir)) {
//     fs.mkdirSync(uploadDir);
// }
// // create a new product



// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       // Ensure path is set to 'src/uploads' relative to the current working directory
//       cb(null, path.join(__dirname, '..', 'uploads')); // Adjust path correctly
//     },
//     filename: function (req, file, cb) {
//       const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
//       cb(null, file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname));
//     }
//   });


// const upload = multer({ storage }).array("images", 10);


// // Route to upload a product with an image

// router.post('/products', upload, async (req: Request, res: Response) => {
//     try {
//       const { name, price, description } = req.body;
//       const imageArray = req.files ? (req.files as Express.Multer.File[]).map(file => ({
//         url: file.path,  // Store file path in the image array
//         caption: file.originalname,  // Optional: Store the image's original name as caption or additional metadata
//       })) : [];
  
//       // Create and save product
//       const newProduct = new Product({ name, price, description, images: imageArray });
//       const savedProduct = await newProduct.save();
//       console.log("Product Name:", name);
//       console.log("Price:", price);
//       console.log("Description:", description);
      
  
//       res.status(201).json({
//         message: 'Product and images uploaded successfully',
//         product: savedProduct
//       });
//     } catch (error) {
//       if (error instanceof Error) {
//         res.status(400).json({ error: error.message });
//       } else {
//         res.status(400).json({ message: 'An unknown error occurred' });
//       }
//     }
//   });

// router.get('/products', async (req: Request, res: Response) => {
//     try {
//         const products = await Product.find().populate('images');
//         res.json(products);
//         console.log(res);
//     } catch (error) {
//         if (error instanceof Error) {
//             res.status(500).json({ message: error.message });
//         } else {
//             res.status(500).json({ message: 'An unknown error occurred' });
//         }
//     }
// });

// router.delete('/products/:id', async (req: Request, res: Response) => {
//     try {
//       const deletedProduct = await Product.findByIdAndDelete(req.params.id);
//       if (!deletedProduct) {
//         res.status(404).json({ message: 'Product not found' });
//       } else {
//         await ProductImage.deleteMany({ product: deletedProduct._id });
//         res.json({ message: 'Product and associated images deleted' });
//       }
//     } catch (error) {
//       res.status(500).json({
//         message: error instanceof Error ? error.message : 'An unknown error occurred'
//       });
//     }
//   });

// router.get('/products/:id', async (req: Request, res: Response) => {
//     try {
//         const product = await Product.findById(req.params.id).populate('images');
//         if (!product) {
//             res.status(404).json({ message: 'Product not found' });
//         } else {
//             res.json(product);
//         }
//     } catch (error) {
//         res.status(500).json({
//             message: error instanceof Error ? error.message : 'An unknown error occurred'
//         });
//     }
// });


// router.put('/products/:id', upload, async (req: Request, res: Response) => {
//   try {
//     // Extract fields from the request body
//     const { name, price, description } = req.body;

//     // Validate required fields
//     if (!name || !price || !description) {
//       res.status(400).json({ message: 'Missing required fields: name, price, description' });
//       return;
//     }

//     // Find and update the product's main details
//     const product = await Product.findById(req.params.id);
//     if (!product) {
//       res.status(404).json({ message: 'Product not found' });
//       return;
//     }

//     product.name = name;
//     product.price = price;
//     product.description = description;

//     // Check for uploaded files and update the images array
//        // Handle images:
//       if (Array.isArray(req.files) && req.files.length > 0) {
//         // If new images are uploaded, overwrite the existing images
//         product.images = (req.files as Express.Multer.File[]).map((file) => ({
//           url: file.path
//         }));
//       } else if (req.body.images === '') {
//         // If images input is empty, clear the images array
//         product.images = [];
//       }

//     // Save the updated product
//     await product.save();

//     // Send the updated product as a response
//     res.json(product);
//   } catch (error) {
//     res.status(500).json({ message: error instanceof Error ? error.message : 'An error occurred' });
//   }
// });

// export default router;




