
    import axios from 'axios';
    import { Product } from '../types';

    const BASE_URL = 'https://fakeapi.platzi.com/api/v1';

    export const getAllProducts = async (): Promise<Product[]> => {
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
    };
