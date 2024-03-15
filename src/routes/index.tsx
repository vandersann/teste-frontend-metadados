
    import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
    import HomePage from '../pages/HomePage';
    import ProductPage from '../pages/ProductPage';
    import CartPage from '../pages/CartPage';

    const AppRoutes: React.FC = () => {
    return (
        <Router>
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage />} />
        </Routes>
        </Router>
    );
    };

    export default AppRoutes;
