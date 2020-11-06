import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Blog from '../views/Blog.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/three',
    name: 'Three',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/Three.vue')
  },
  {
    path: '/blog/:id',
    name: 'Post',
    component: Post,
    props: true
  },
  {
    path: '/blogs',
    name: 'Blog',
    component: Blog,
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
