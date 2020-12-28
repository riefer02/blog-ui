import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Post from '../views/Post.vue';
import Blog from '../views/Blog.vue';
import Music from '../views/Music.vue';
import Resume from '../views/Resume.vue';
import NotFound from '../views/NotFound.vue';
import Chart from '../views/Chart.vue';

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
    component: Blog
  },
  {
    path: '/music',
    name: 'Music',
    component: Music
    // meta: { requiresAuth: true } // Uncomment to Make Protected Route
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
  {
    path: '/chart',
    component: Chart
  }
];

const router = createRouter({
  history: createWebHistory(),
  // mode: 'history',
  routes
});

// Check to see if route contains meta attribute to determine access...
router.beforeEach((to, from, next) => {
  const loggedIn = localStorage.getItem('user');
  if (to.matched.some(record => record.meta.requiresAuth && !loggedIn)) {
    next('/');
  }
  next();
});
export default router;
