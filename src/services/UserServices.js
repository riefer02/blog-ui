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
  registerNewUser(credentials) {
    return apiClient.post('/auth/signup', credentials);
  },
  loginUser(credentials) {
    return apiClient.post('/auth/login', credentials);
  }
};
