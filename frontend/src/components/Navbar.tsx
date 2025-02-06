import { Link, useLocation } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';
import { FaTachometerAlt, FaShoppingCart } from "react-icons/fa"; // Import dashboard icon
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useCart } from '../context/CartContex';


export default function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { user, logout } = useAuth();
  const { cart } = useCart();
  const [scrolled,setScrolled]  = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //console.log('Cart State:', cart);
  console.log('User role:', user?.role, " ",user?.username); 

  return (
    <Navbar className={`fixed w-full z-10 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`} >
      <Navbar.Brand to="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-theme-4 text-xl font-inter400 font-bold dark:text-white">
          BLUE FLAME ENTERPRISES
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      {user?.role === 'admin' && (
          <>
            <Link to="/dashboard" className="ml-4">
              <FaTachometerAlt size={24} className="cursor-pointer text-white" />
            </Link>
            <Button onClick={logout}  className="ml-4">
              Logout
            </Button>
          </>
        )}
        <Button className="rounded-full" href='/contact'>let's Talk</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className='text-gray-800  font-roboto ' active={isActive('/')}>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-gray-800 font-roboto ' as={Link} to="/about" active={isActive('/about')}>
          About
        </Navbar.Link>
        <Navbar.Link className='text-gray-800  font-roboto ' as={Link} to="/services" active={isActive('/services')}>
          Services
        </Navbar.Link>
        <Navbar.Link className='text-gray-800  font-roboto ' as={Link} to="/products" active={isActive('/products')}>
          Products
        </Navbar.Link>
        {user ? (
  <>
    {user.role === 'user' && (
      <Link to="/cart" className="ml-4">
        <Button className="rounded-full">
          <FaShoppingCart className="inline-block mr-1" /> 
          {user && cart ? (
      <span>Cart ({cart.length})</span>
    ) : (
      <span>Cart (0)</span>
    )}
        </Button>
      </Link>
    )}
    {user.role === 'admin' && (
      <Link to="/admin/dashboard" className="ml-4">
        <FaTachometerAlt size={24} className="cursor-pointer" />
      </Link>
    )}
    <Button onClick={logout} className="ml-4">Logout</Button>
  </>
) : (
  <div className="flex gap-4">
    <Link to="/login">
      <Button>Login</Button>
    </Link>
    <Link to="/register">
      <Button>Register</Button>
    </Link>
  </div>
)}
      </Navbar.Collapse>
    </Navbar>
  );
}