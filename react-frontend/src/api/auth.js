import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

export const loginUser = (email, password) => {
  return axios.post(`http://localhost:5000/api/auth/login`, { email, password });
};

export const registerUser = (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};
