



import './App.css'


import Nav from './components/Navbar'
import  Foot  from './components/Footer'
import { Route,Routes } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Products from './pages/Products'
import ProductPage from './pages/ProductPage'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './components/Login'
import { AuthProvider } from './context/AuthContext'


function App() {
  

  return (
    <>
    <AuthProvider>
   <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductPage/>} />
        <Route path="/login" element={<Login />} />
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
      </Routes>
      </AuthProvider>
    
    <Foot/>
    </>
  )
}

export default App
