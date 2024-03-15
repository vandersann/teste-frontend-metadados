// src/pages/ProductEditPage.tsx

import React from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header/Header';
import ProductEditForm from '../components/ProductEditForm/ProductEditForm';
import Footer from '../components/Footer/Footer';

const ProductEditPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();

    const handleEditSubmit = () => {
    // Lógica para redirecionar ou atualizar a lista de produtos após a edição
    console.log('Produto editado com sucesso!');
};

return (
    <div>
    <Header />
    <h1>Editar Produto</h1>
    <ProductEditForm onSubmit={handleEditSubmit} />
    <Footer />
    </div>
);
};

export default ProductEditPage;
