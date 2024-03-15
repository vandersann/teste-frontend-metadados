// src/components/Navbar/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../Context/CarContext';
import './Navbar.scss';

const Navbar: React.FC = () => {
    const { cart } = useCart();

    const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
    <nav className="navbar">
    <Link to="/" className="nav-link">
        Home
    </Link>
    <Link to="/products" className="nav-link">
        Produtos
    </Link>
    <Link to="/cart" className="nav-link cart-link">
        Carrinho ({cartItemCount})
    </Link>
    </nav>
);
};

export default Navbar;
