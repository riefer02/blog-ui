import axios from 'axios';

const apiClient = axios.create({
  baseURL: `/api/v1/blog/`,
  withCredentials: false, // Need to research
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
});

export default {
  likeBlogPost(id, likeData) {
    return apiClient.post(id + '/like', likeData);
  }
};
