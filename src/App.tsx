import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import HomePage from './pages/Home'
import ProductsPage from './pages/Products'
import ProductDetailsPage from './pages/ProductDetails'
import CartPage from './pages/CartPage'
import Footer from './components/Footer/Footer'
import { CartProvider } from './Context/CarContext'
import './App.scss'
import './style.scss'

export const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <CartProvider>
          <Navbar />
          <div className="content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/products/:id" element={<ProductDetailsPage />} />
              <Route path="/cart" element={<CartPage />} />
            </Routes>
          </div>
        </CartProvider>
      </div>
    </Router>
  )
}
