// src/components/AddToCartButton/AddToCartButton.tsx

import React from 'react';
import { useCart } from '../../Context/CarContext';

interface AddToCartButtonProps {
    productId: number;
    productName: string;
    productPrice: number;
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
    productId,
    productName,
    productPrice,
}) => {
const { addToCart } = useCart();

const handleClick = () => {
    addToCart({ id: productId, name: productName, price: productPrice });
};

return (
    <button onClick={handleClick} className="add-to-cart-button">
        Adicionar ao Carrinho
    </button>
);
};

export default AddToCartButton;
