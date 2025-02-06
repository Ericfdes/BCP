import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode
} from 'react';
import { useAuth } from './AuthContext';

interface CartItem {
  _id:string,
  id: string;
  name: string;
  price: number;
  quantity: number;

}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => Promise<void>;
  removeFromCart: (itemId: string) => Promise<void>;
  clearCart: () => Promise<void>;
  loading: boolean;
  error: string | null;
  fetchCart: () => Promise<void>; 
  user: {
    username: string;
    email: string;
  } | null;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart?.length || 0);
  }, [cart]);

  // Fetch cart
  const fetchCart = async () => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${user.username}`, {
        credentials: 'include'
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setCart(data.items || []);
      } else {
        throw new Error('Unable to fetch cart');
      }
    } catch (err: any) {
      setError('Failed to fetch cart');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (item: CartItem) => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify({
          userId: user.username,
          item
        })
      });
      console.log(item)
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.message);
      }
  
      setCart(data.items);
      setCartCount(data.items.reduce((total: number, item: CartItem) => total + item.quantity, 0));
    } catch (err) {
      console.error('Add to cart error:', err);
      setError('Failed to add item to cart');
    } finally {
      setLoading(false);
    }
  };
  
  // Add total items count calculation
  const calculateCartCount = (items: CartItem[]) => {
    return items.reduce((total, item) => total + (item.quantity || 0), 0);
  };
  
  // Update useEffect to use new count calculation
  useEffect(() => {
    if (cart) {
      setCartCount(calculateCartCount(cart));
    }
  }, [cart]);
  // Remove from cart
  const removeFromCart = async (itemId: string) => {
    if (!user) return;
    setLoading(true);
    try {
      const response = await fetch(`http://localhost:5000/api/cart/${user.username}/${itemId}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await response.json();
      setCart(data.items);
    } catch (err) {
      setError('Failed to remove item');
    } finally {
      setLoading(false);
    }
  };
  // const removeFromCart = async (id: string) => {
  //   if (!id) {
  //     console.error("Item ID is undefined, cannot remove from cart.");
  //     return;
  //   }
  
  //   try {
  //     await fetch(`http://localhost:5000/api/cart/${user.username}/${user.id}`, {
  //       method: "DELETE",
  //     });
  
  //     fetchCart(); // Refresh cart after deletion
  //   } catch (error) {
  //     console.error("Failed to remove item from cart:", error);
  //   }
  // };
  
  // Clear cart
  const clearCart = async () => {
    if (!user) return;
    setLoading(true);
    try {
      // Implement your clear-cart API route or remove items one by one
      const response = await fetch(`http://localhost:5000/api/cart/clear/${user.username}`, {
        method: 'DELETE',
        credentials: 'include'
      });
      const data = await response.json();
      setCart(data.items || []);
    } catch (err) {
      setError('Failed to clear cart');
    } finally {
      setLoading(false);
    }
  };

  const value: CartContextType = {
    cart,
    addToCart,
    removeFromCart,
    clearCart,
    loading,
    error,
    fetchCart,
    user
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};