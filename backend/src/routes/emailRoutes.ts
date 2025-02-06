// server/routes/emailRoute.js

import express from 'express';
import nodemailer from 'nodemailer';
import User from '../models/user';

const router = express.Router();

router.post('/send-inquiry', async (req, res) => {

  const { cartDetails, username } = req.body;  // Get cart details and username from the request

  // Find the user by username
  const user = await User.findOne({ username });
  if (!user) {
     res.status(404).json({ message: 'User not found' });
     return;
  }

  // Nodemailer transporter setup
  const transporter = nodemailer.createTransport({
    service: 'gmail', // You can use any service you prefer
    auth: {
      user: 'eablopascobar@gmail.com', // Your email
      pass: 'odrzvjfzdgomnqnt', // Your email password
    },
  });

  const mailOptions = {
    from: 'your-email@example.com',
    to: user.email, // Send email to the recipient
    subject: 'Product Inquiry',
    text: `Inquiry Details:\n\n${cartDetails}`, // Cart details will be included in the email body
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Inquiry sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send inquiry' });
  }
});

export default router;
