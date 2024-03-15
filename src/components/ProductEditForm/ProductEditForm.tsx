// src/components/ProductEditForm/ProductEditForm.tsx

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';
import './ProductEditForm.scss';

interface ProductEditFormProps {
  onSubmit: () => void;
}

const ProductEditForm: React.FC<ProductEditFormProps> = ({ onSubmit }) => {
  const { id } = useParams<{ id: string }>();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await api.get(`/api/v1/products/${id}`);
        const productData = response.data;
        setName(productData.name);
        setDescription(productData.description);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    };

    fetchProduct();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        await api.put(`/api/v1/products/${id}`, { name, description });
        onSubmit();
    } catch (error) {
        console.error('Erro ao editar produto:', error);
    }
};

    return (
    <form onSubmit={handleSubmit} className="product-edit-form">
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
            <button type="submit">Salvar</button>
    </form>
    );
};

export default ProductEditForm;
