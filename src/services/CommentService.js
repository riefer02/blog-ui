import axios from 'axios';

const apiClient = axios.create({
  baseURL: `http://localhost:6969/api/v1/blog/`,
  withCredentials: false, // Need to research
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  getComments(id) {
    return apiClient.get(id + '/comments');
  },
  createComment(id, commentData) {
    return apiClient.post(id + '/comments/create', commentData);
  }
};
