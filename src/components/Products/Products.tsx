    // src/components/Products/Products.tsx
    import React, { useState, useEffect } from 'react';
    import ProductCard from '../ProductCard/ProductCard';
    import SearchBar from '../SearchBar/SearchBar';
    import { Product as ProductType } from '../../types';
    import api from '../../Services/api';

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

    const handleSearch = async (term: string) => {
        try {
        const response = await api.get(`/products?search=${term}`);
        setProducts(response.data);
        } catch (error) {
        console.error('Error searching products:', error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="products-container">
        <SearchBar onSearch={handleSearch} />
        {products.map(product => (
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
