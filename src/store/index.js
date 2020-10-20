import { createStore } from 'vuex';
import blogService from '../../services/BlogService.js';

export default createStore({
  state: {
    user: { name: 'Andrew Riefenstahl', age: 32 },
    blogs: []
  },
  mutations: {
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    }
  },
  actions: {
    retrieveBlogs({ commit }) {
      blogService.getBlogs().then(response => {
        commit('SET_BLOGS', response.data.blogs);
      });
    }
  },
  modules: {}
});
