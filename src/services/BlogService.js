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
 async getBlogs() {
    return await apiClient.get('/blog');
  },
  async getBlog(id) {
    return await apiClient.get('/blog/' + id);
  },
  async createBlog(data) {
    return await apiClient.post('/blog/create/', data);
  },
  deleteBlog(id) {
    return apiClient.delete('/blog/delete/' + id);
  },
  updateBlog(id, data) {
    return apiClient.put('/blog/update/' + id, data);
  }
};
