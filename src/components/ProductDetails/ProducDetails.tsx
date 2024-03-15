    // src/pages/ProductDetails.tsx
    import React, { useState, useEffect } from 'react';
    import { useParams } from 'react-router-dom';
    import api from '../../Services/api';
    import { Product as ProductType } from '../../types';

    const ProductDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [product, setProduct] = useState<ProductType | null>(null);

    useEffect(() => {
        const fetchProduct = async () => {
        try {
            const response = await api.get(`/products/${id}`);
            setProduct(response.data);
        } catch (error) {
            console.error('Error fetching product:', error);
        }
        };

        fetchProduct();
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="product-details">
        <img src={product.image} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        </div>
    );
    };

    export default ProductDetails;
