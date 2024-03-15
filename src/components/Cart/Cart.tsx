
    import React from 'react';
    import { useCart } from '../../Context/CarContext';
    import './Cart.scss';

    const Cart: React.FC = () => {
    const { cart, removeFromCart, clearCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
    <div className="cart">
        <h2>Carrinho de Compras</h2>
        {cart.length === 0 ? (
            <p>O seu carrinho está vazio.</p>
        ) : (
            <div>
            {cart.map((item) => (
                <div key={item.id} className="cart-item">
                <div>
                    <strong>{item.name}</strong>
                    <span>Quantidade: {item.quantity}</span>
                </div>
                <div>
                    <span>Preço: R$ {item.price}</span>
                    <button onClick={() => removeFromCart(item.id)}>Remover</button>
                </div>
                </div>
            ))}
            <div className="cart-total">
                <strong>Total:</strong> R$ {totalPrice.toFixed(2)}
            </div>
            <button onClick={clearCart} className="clear-cart">
                Limpar Carrinho
            </button>
            </div>
        )}
        </div>
    );
    };

    export default Cart;
