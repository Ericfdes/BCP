// React Component

import { useEffect, useState } from 'react';
import React from 'react';
import { useCart } from '../context/CartContex';
import { Button } from 'flowbite-react';
import axios from 'axios'; // Axios for HTTP requests

export default function CartPage() {
  const { cart, removeFromCart, clearCart, loading, error, fetchCart, user } = useCart();
  const [isDeleting, setIsDeleting] = useState(false);

  const handleRemoveItem = async (itemId: string, e: React.MouseEvent) => {
    e.preventDefault();
    setIsDeleting(true);
    try {
      await removeFromCart(itemId);
      await fetchCart(); // Refresh cart after removal
    } catch (error) {
      console.error('Failed to remove item:', error);
    } finally {
      setIsDeleting(false);
    }
  };

  useEffect(() => {
    fetchCart(); // Ensure cart loads on page mount
  }, []);

  const handleSendInquiry = async () => {
    const inquiryDetails = cart.map((item) => `${item.name} (x${item.quantity})`).join(', ');

    try {
      // Send the cart details and the current user's username to the backend
      await axios.post('http://localhost:5000/api/send-inquiry', {
        cartDetails: inquiryDetails,
        username: user?.username || 'anonymous', // Provide fallback if user is null
      });
      alert('Inquiry sent successfully');
    } catch (error) {
      console.error('Failed to send inquiry:', error);
      alert('Failed to send inquiry');
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!cart || cart.length === 0) {
    return (
      <div className="container pt-20 px-4 py-8">
        <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container pt-20 px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="mb-4">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p>Price: ₹{item.price.toLocaleString()}</p>
                    <p>Quantity: {item.quantity}</p>
                  </div>
                  <Button
                    onClick={(e) => handleRemoveItem(item._id, e)}
                    disabled={isDeleting}
                  >
                    {isDeleting ? 'Removing...' : 'Remove'}
                  </Button>
                </div>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <Button onClick={handleSendInquiry}>Send Inquiry</Button>
            <Button
              onClick={async () => {
                await clearCart(); 
                await fetchCart(); // Refresh cart after clearing it
              }}
              className="ml-4"
            >
              Clear Cart
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
