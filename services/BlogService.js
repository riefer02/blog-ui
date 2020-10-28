import axios from 'axios'
    
const apiClient = axios.create({
  baseURL: `http://localhost:6969`,
  withCredentials: false, 
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getBlogs() {
    return apiClient.get('/blog')
  },
  getBlog(id) {
    return apiClient.get('/blog/' + id)
  },
  deleteBlog(id) {
    return apiClient.delete('/blog/delete/' + id)
  }
}