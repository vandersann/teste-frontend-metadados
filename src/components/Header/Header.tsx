
    import React from 'react';
    import { Link } from 'react-router-dom';
    import './Header.scss';

    const Header: React.FC = () => {
    return (
        <header className="header">
        <div className="logo">
            <Link to="/">Minha Loja</Link>
        </div>
        <nav className="nav">
            <Link to="/produtos">Produtos</Link>
            <Link to="/categorias">Categorias</Link>
        </nav>
        <div className="search-box">
            <input type="text" placeholder="Pesquisar produtos..." />
            <button>Pesquisar</button>
        </div>
        </header>
    );
    };

    export default Header;
