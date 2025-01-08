import { Link, useLocation } from 'react-router-dom';
import { Navbar, Button } from 'flowbite-react';
import { FaTachometerAlt } from "react-icons/fa"; // Import dashboard icon
import { useAuth } from '../context/AuthContext'; // Import useAuth hook
import { useEffect, useState } from 'react';


export default function Nav() {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  const { user, logout } = useAuth();
  const [scrolled,setScrolled]  = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.screenY > 50 ){
        setScrolled(true);

      }else{
        setScrolled(false)
      }
    };

    window.addEventListener('scroll',handleScroll);
    return () => {
      window.removeEventListener('scroll',handleScroll)
    };
  },[]);

  return (
    <Navbar className='bg-transparent  fixed top-0 w-full z-50 ' >
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
     
      </Navbar.Collapse>
    </Navbar>
  );
}