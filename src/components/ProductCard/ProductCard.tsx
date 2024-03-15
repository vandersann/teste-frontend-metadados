
    import React from 'react';
    import { Product as ProductType } from '../../types';

    interface ProductCardProps {
    product: ProductType;
    onAddToCart: (product: ProductType) => void;
    }

    const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
    return (
        <div className="product-card">
        <img src={product.image} alt={product.title} />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
        <button onClick={() => onAddToCart(product)}>Add to Cart</button>
        </div>
    );
    };

    export default ProductCard;
