import axios from 'axios';

const API_URL = 'http://localhost:5000/api/users';

export const getUserDetails = (token) => {
  return axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
