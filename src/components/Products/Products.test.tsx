
    import React from 'react';
    import { render, screen, fireEvent } from '@testing-library/react';
    import Products from './Products';
    import { Product as ProductType } from '../../types';
    import './setupTests';

    describe('Products Component', () => {
    test('adds product to cart', () => {
        const testProduct: ProductType = {
            id: 1,
            title: 'Test Product',
            price: 10.99,
            image: 'test-product.jpg',
            name: '',
            description: ''
        };

        render(<Products />);

        // Verifica se o botão de adicionar está renderizado
        const addToCartButton = screen.getByText(/Add to Cart/i);
        expect(addToCartButton).toBeInTheDocument();

        // Simula o clique no botão de adicionar
        fireEvent.click(addToCartButton);

        // Verifica se o produto foi adicionado ao carrinho
        const cartItems = screen.getByTestId('cart-items');
        expect(cartItems.children.length).toBe(1);
    });

    test('removes product from cart', () => {
        const testProduct: ProductType = {
            id: 1,
            title: 'Test Product',
            price: 10.99,
            image: 'test-product.jpg',
            name: '',
            description: ''
        };

        render(<Products />);

        // Verifica se o botão de adicionar está renderizado
        const addToCartButton = screen.getByText(/Add to Cart/i);
        expect(addToCartButton).toBeInTheDocument();

        // Simula o clique no botão de adicionar
        fireEvent.click(addToCartButton);

        // Verifica se o produto foi adicionado ao carrinho
        const cartItems = screen.getByTestId('cart-items');
        expect(cartItems.children.length).toBe(1);

        // Simula o clique no botão de remover
        const removeButton = screen.getByText(/Remove/i);
        fireEvent.click(removeButton);

        // Verifica se o produto foi removido do carrinho
        expect(cartItems.children.length).toBe(0);
    });
    });
