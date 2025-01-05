import { Link, useLocation } from 'react-router-dom';
import { Navbar,Button,Badge } from 'flowbite-react';
import { PiShoppingCartSimpleFill } from "react-icons/pi";


export function Nav() {
  const location = useLocation()
  const isActive = (path : string) => location.pathname === path;
  


  return (
    <Navbar    className='bg-theme-1 bg-opacity-95 fixed top-0 w-full z-50  ' >
      <Navbar.Brand to="https://flowbite-react.com ">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BLUE FLAME ENTERPRISES</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <PiShoppingCartSimpleFill size={24}  />
      <Badge size='xs'>4</Badge>
      {/* {user ? (
          <>
            <div className="relative">
              <PiShoppingCartSimpleFill size={24} className="cursor-pointer" />
              {cartCount > 0 && <Badge count={cartCount} />}
            </div>
            <Button onClick={logout} className="ml-4">Logout</Button>
          </>
        ) : (
          <Button as={Link} to="/login">Login</Button>
        )} */}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse >
        <Navbar.Link as={Link} to="/"  className='text-white font-roboto font-bold' active={isActive('/')}>
          Home
        </Navbar.Link>
        <Navbar.Link className='text-white font-roboto font-bold' as={Link} to="/about" active={isActive('/about')}>About</Navbar.Link>
        <Navbar.Link className='text-white font-roboto font-bold'  as={Link}  to="/services" active={isActive('/services')}>Services</Navbar.Link>
        <Navbar.Link className='text-white font-roboto font-bold'as={Link} to="/products" active={isActive('/Products')}>Products</Navbar.Link>
        <Navbar.Link className='text-white font-roboto font-bold' as={Link} to="/contact" active={isActive('/Contact')}>Contact</Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}


export default Nav;
