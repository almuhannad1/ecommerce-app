import axiosClient from './axiosClient'; // Use import instead of require

const addToCart = (payload) => axiosClient.post('/carts', payload);

const getUserCartItems = (email) => axiosClient.get(`/carts?populate[products][populate]=banner&filters[email][$eq]=${email}`)

export default { addToCart, getUserCartItems };
