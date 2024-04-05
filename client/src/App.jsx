import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navigations from "./components/Navigations"
import Products from './components/Products';
import ProductDetail from './components/ProductDetail';
import Login from './components/Login';
import Register from './components/Register';
import Account from './components/Account';
import Cart from './components/Cart';

function App() {
  const [token, setToken] = useState(null);

  const handleTokenUpdate = (newToken) => {
    setToken(newToken);
  };

  const handleLogout = () => {
    setToken(null); // Clear the token
  };

  return (
    <>
      <h1>Jay's Online Store</h1>
      
      <Router>
        <Navigations token={token} handleLogout={handleLogout} />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/login" element={<Login token={token} setToken={handleTokenUpdate} />} />
          <Route path="/register" element={<Register token={token} setToken={handleTokenUpdate} />} />
          <Route path="/account" element={token ? <Account token={token} setToken={handleTokenUpdate} /> : <Navigate to="/login" />} />
          <Route path="/products/:id" element={<ProductDetail token={token} setToken={handleTokenUpdate} />} />
          <Route path="/carts/:id" element={<Cart token={token} setToken={handleTokenUpdate} />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
export const API_URL = "http://localhost:3000";