import { createStore } from 'vuex';
import blogService from '../../services/BlogService.js';

export default createStore({
  state: {
    user: { name: 'Andrew Riefenstahl', age: 32 },
    blogTopics: [
      'music',
      'web development',
      'lifestyle',
      'politics',
      'science'
    ],
    blogs: [],
    snack: '',
    modalConfig: {
      modalType: 'login',
      modalActive: true,
      modalData: {}
    }
  },
  mutations: {
    SET_MODAL(state, config) {
      state.modalConfig = config;
    },
    SET_BLOGS(state, blogs) {
      state.blogs = blogs;
    },
    SET_SNACK(state, snack) {
      state.snack = snack;
    }
  },
  actions: {
    retrieveBlogs({ commit }) {
      blogService.getBlogs().then(response => {
        commit('SET_BLOGS', response.data.blogs);
      });
    }
  },
  getters: {
    snackMessage: state => {
      return state.snack;
    }
  },
  modules: {}
});
