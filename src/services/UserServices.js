import axios from 'axios';

const apiClient = axios.create({
  baseURL: `/api/v1`,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  async registerNewUser(credentials) {
    return await apiClient.post('/auth/signup', credentials);
  },
  async loginUser(credentials) {
    return await apiClient.post('/auth/login', credentials);
  }
};
