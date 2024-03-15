
    import React from 'react';
    import Header from '../components/Header/Header';
    import Categories from '../components/Categories/Categories';
    import Footer from '../components/Footer/Footer';

    const CategoriesPage: React.FC = () => {
    return (
        <div>
        <Header />
        <h1>Categorias</h1>
        <Categories />
        <Footer />
        </div>
    );
    };

    export default CategoriesPage;
