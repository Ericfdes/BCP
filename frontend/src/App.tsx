import './App.css'
import Nav from './components/Navbar'
import Foot from './components/Footer'
import { Route, Routes, useLocation } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContex'
import AdminNavbar from './admin/components/AdminNavbar';
import AdminSidebar from './admin/components/adminSidebar';
import ProductList from './admin/pages/ProductList';
import CreateProduct from './admin/pages/CreateProduct';
import CartPage from './pages/CartPage'
import Register from './pages/Registration'

function App() {
  const location = useLocation();

  // Determine if the current route is within the admin panel
  const isAdminRoute = location.pathname.startsWith('/admin');

  return (
    <>
      <AuthProvider>
        <CartProvider>
        {/* Show Nav and Foot only for non-admin routes */}
        {!isAdminRoute && <Nav />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/register" element={<Register />} />

          {/* Admin Routes */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute allowedRoles={['admin']} >
                <div className="flex">
                  <AdminSidebar />
                  <div className="flex-1">
                    <AdminNavbar />
                    <Routes>
                      <Route path="dashboard" element={<Dashboard />} />
                      <Route path="/product-list" element={<ProductList />} />
                      <Route path="/add-product" element={<CreateProduct />} />
                    </Routes>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
           {/* User Protected Routes */}
           <Route path="/cart" element={
              <ProtectedRoute allowedRoles={['user']}>
                <CartPage />
              </ProtectedRoute>
            } />
        </Routes>
        {!isAdminRoute && <Foot />}
        </CartProvider>
      </AuthProvider>
    </>
  )
}

export default App;
