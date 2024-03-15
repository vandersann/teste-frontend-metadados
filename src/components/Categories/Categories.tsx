
    import React, { useState, useEffect } from 'react';
    import { Link } from 'react-router-dom';
    import api from '../../services/api';
    import './Categories.scss';

    interface Category {
    id: number;
    name: string;
    }

    const Categories: React.FC = () => {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
        try {
            const response = await api.get<Category[]>('/api/v1/categories');
            setCategories(response.data);
        } catch (error) {
            console.error('Erro ao buscar categorias:', error);
        }
        };

        fetchCategories();
    }, []);

    return (
        <div className="categories">
        {categories.map((category) => (
            <Link to={`/categoria/${category.id}`} key={category.id}>
            <div className="category">{category.name}</div>
            </Link>
        ))}
        </div>
    );
    };

    export default Categories;
