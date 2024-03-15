    // src/components/Products/Products.tsx
    import React, { useState, useEffect } from 'react';
    import ProductCard from '../components/ProductCard/ProductCard';
    import { Product as ProductType } from '../types';
    import api from '../Services/api';

    const Products: React.FC = () => {
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<ProductType[]>([]);
    const [cart, setCart] = useState<ProductType[]>([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
        try {
            const response = await api.get('/products');
            setProducts(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching products:', error);
            setLoading(false);
        }
        };

        fetchProducts();
    }, []);

    const handleAddToCart = (product: ProductType) => {
        const updatedCart = [...cart, product];
        setCart(updatedCart);
    };

    const handleRemoveFromCart = (productId: number) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="products-container">
        <div className="search-bar">
            <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={e => handleSearch(e.target.value)}
            />
        </div>
        {filteredProducts.map(product => (
            <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            />
        ))}
        <div className="cart-container">
            <h2>Cart</h2>
            {cart.length === 0 ? (
            <p>Your cart is empty.</p>
            ) : (
            <ul>
                {cart.map(item => (
                <li key={item.id}>
                    {item.title} - ${item.price}
                    <button onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                </li>
                ))}
            </ul>
            )}
        </div>
        </div>
    );
    };

    export default Products;
