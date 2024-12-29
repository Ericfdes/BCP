import { Link, useLocation } from 'react-router-dom';
import { Navbar,Button } from 'flowbite-react';

export function Nav() {
  const location = useLocation()
  const isActive = (path : string) => location.pathname === path;


  return (
    <Navbar    className='bg-theme-1 bg-opacity-95 fixed top-0 w-full z-50  ' >
      <Navbar.Brand to="https://flowbite-react.com ">
       
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">BLUE FLAME ENTERPRISES</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
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
