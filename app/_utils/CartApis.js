import axiosClient from './axiosClient'; // Use import instead of require

const addToCart = (payload) => axiosClient.post('/carts', payload);

export default { addToCart };
