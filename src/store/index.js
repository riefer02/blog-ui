import Axios from 'axios';
import { createStore } from 'vuex';
import blogService from '../services/BlogService.js';
import userService from '../services/UserServices.js';

export default createStore({
  state: {
    // user: { name: 'Andrew Riefenstahl', age: 32 },
    user: null,
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
    },
    SET_USER_DATA(state, userData) {
      (state.user = userData),
        localStorage.setItem('user', JSON.stringify(userData));
      Axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${userData.token}`;
    },
    CLEAR_USER_DATA() {
      localStorage.removeItem('user');
      location.reload();
    },
    SET_GUEST_DATA(state, guest) {
      state.user = guest;
      localStorage.setItem('user', JSON.stringify(guest));
    }
  },
  actions: {
    retrieveBlogs({ commit }) {
      blogService.getBlogs().then(response => {
        commit('SET_BLOGS', response.data.blogs);
      });
    },
    async registerNewUser({ commit }, credentials) {
      await userService
        .registerNewUser(credentials)
        .then(response => {
          console.log('registration response', response);
          commit('SET_USER_DATA', response.data.user);
        })
        .catch(err => {
          console.log(err.response.data.error);
          throw err;
        });
    },
    async loginUser({ commit }, credentials) {
      await userService
        .loginUser(credentials)
        .then(response => {
          commit('SET_USER_DATA', response.data.user);
        })
        .catch(err => {
          console.log(err.response.data.error);
          throw err;
        });
    },
    logout({ commit }) {
      commit('CLEAR_USER_DATA');
    }
  },
  getters: {
    snackMessage: state => {
      return state.snack;
    },
    loggedIn(state) {
      if (state.user === 'Guest') {
        return false;
      }
      return !!state.user;
    }
  },
  modules: {}
});
