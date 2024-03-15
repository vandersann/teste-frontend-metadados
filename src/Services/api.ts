// src/services/api.ts
import axios from 'axios';

const baseURL = 'https://fakeapi.platzi.com';

const api = axios.create({
  baseURL,
});

export const getAllProducts = async () => {
  try {
    const response = await api.get('/products');
    return response.data;
  } catch (error) {
    throw new Error('Error fetching products');
  }
};

export const getProductById = async (id: number) => {
  try {
    const response = await api.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching product');
  }
};

export const addProduct = async (product: any) => {
  try {
    const response = await api.post('/products', product);
    return response.data;
  } catch (error) {
    throw new Error('Error adding product');
  }
};

export const updateProduct = async (id: number, product: any) => {
  try {
    const response = await api.put(`/products/${id}`, product);
    return response.data;
  } catch (error) {
    throw new Error('Error updating product');
  }
};

export const deleteProduct = async (id: number) => {
  try {
    const response = await api.delete(`/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error('Error deleting product');
  }
};

export default api;
