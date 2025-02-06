import { Request, Response } from 'express';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from '../models/user';


const secret = process.env.JWT_SECRET;
if (!secret) {
  throw new Error("JWT_SECRET is missing. Please check your .env file.");
}

export const register = async (req: Request, res: Response) => {
  try {
    const { username, email, password } = req.body;
    let status = 200;
    let responseData = {};
    console.log('Request Body:', req.body);

    const userExists = await User.findOne({ 
      $or: [{ email }, { username }] 
    });

    if (!userExists) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const user = new User({
        username,
        email,
        password: hashedPassword,
        role: 'user'
      });

      await user.save();
      
      status = 201;
      responseData = {
        message: 'User registered successfully',
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role
        }
      };
    } else {
      status = 400;
      responseData = { message: 'User already exists' };
    }

    res.status(status).json(responseData);
  } catch (error) {
    res.status(500).json({ 
      message: 'Server error',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};


export const login = async (req: Request, res: Response) => {
    try {
      const { username, password } = req.body;
      console.log("Received username:", username);
  
      // Find user
      const user = await User.findOne({ username });
      console.log("received userinfo",user)
      if (!user) {
        res.status(401).json({ message: 'Invalid username or password' });
        return;
      }
  
      // Validate password
      const isMatch = await bcrypt.compare(password.trim(), user.password);
      console.log('Plaintext password:', password);
      console.log('Stored hashed password:', user.password);


      if (!isMatch) {
        res.status(401).json({ message: 'Invalid username or password' });
        return;
      }
  
      // Generate JWT token
      const token = jwt.sign(
        { id: user._id, username: user.username, role: user.role },
        secret,
        { expiresIn: '1h' }
      );
  
      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'lax', // Use 'None' if on different domains
        secure: false, // Set to true in production with HTTPS
      });

      res.header('Access-Control-Allow-Credentials', 'true'); // Required for CORS with credentials
  
      res.json({ user: { id: user._id, username: user.username, role: user.role }, token });
  
    } catch (error) {
      console.error("Error during login:", error);
        res.status(500).json({ message: 'Login failed', error: error instanceof Error ? error.message : 'Unknown error' });;
    }
  };