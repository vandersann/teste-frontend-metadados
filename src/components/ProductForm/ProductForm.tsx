
    import React, { useState } from 'react';
    import api from '../../services/api';
    import './ProductForm.scss';

    interface ProductFormProps {
    onSubmit: () => void;
    }

    const ProductForm: React.FC<ProductFormProps> = ({ onSubmit }) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
        await api.post('/api/v1/products', { name, description });
        onSubmit();
        setName('');
        setDescription('');
        } catch (error) {
        console.error('Erro ao adicionar produto:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="product-form">
        <input
            type="text"
            placeholder="Nome do produto"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
        />
        <textarea
            placeholder="Descrição do produto"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
        />
        <button type="submit">Adicionar Produto</button>
        </form>
    );
    };

    export default ProductForm;
