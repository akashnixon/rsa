import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api/rsa';

export const encryptMessage = async (message, N, e) => {
  const response = await axios.post(`${API_BASE_URL}/encrypt`, { message, N, e });
  return response.data;
};

export const decryptMessage = async (message) => {
  const response = await axios.post(`${API_BASE_URL}/decrypt`, { message });
  return response.data;
};

export const getPublicKey = async () => {
    const response = await axios.get(`${API_BASE_URL}/public-key`);
    return response.data;
};
  
export const getPrivateKey = async () => {
    const response = await axios.get(`${API_BASE_URL}/private-key`);
    return response.data;
};
  
export const getDetails = async () => {
  const response = await axios.get(`${API_BASE_URL}/details`);
  return response.data;
};
