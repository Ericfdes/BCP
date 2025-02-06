import express from "express";
import product from "./models/productSchema";
import  productRoutes  from './routes/productRoutes';
import './models/productImage'; // Ensure ProductImage is registered
import './models/productSchema'; 
import cors from 'cors';
import path from "path";
import authRoutes from './routes/authRoutes';
import cookieParser from 'cookie-parser';
import cartRoutes from './routes/cartRoutes';
import emailRoute  from "./routes/emailRoutes";
const app = express();

// CORS configuration
app.use(cors({
    origin: 'http://localhost:5173', // Specify your frontend's URL
    credentials: true, // Allow credentials (cookies, authorization headers)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(cookieParser()); 
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  
  app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`, req.body);
    next();
  });


app.use('/api/cart', cartRoutes);



app.use(express.json());
app.use('/api', emailRoute); 
app.use('/api', productRoutes);
app.use('/api/auth', authRoutes);
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//app.use('/api/auth', authRoutes);

// Error handler
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err.stack);
    res.status(500).json({ 
      message: 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  });

export default app;
