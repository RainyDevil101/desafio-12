import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import isAuthenticatedGuard from '@/auth/is-authenticated.guard';
import isNotAuthenticatedGuard from '@/auth/is-not-authenticated.guard';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: [isAuthenticatedGuard],
      component: () => import('@/layouts/HomeLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home-view',
          component: HomeView,
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
      beforeEnter: [isNotAuthenticatedGuard],
      component: () => import('@/layouts/AuthLayout.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: LoginView,
        },
        {
          path: 'register',
          name: 'register',
          component: RegisterView,
        },
      ],
    },

    // 404
    {
      path: '/:pathMatch(.*)*',
      component: NotFoundView,
    },
  ],
});

export default router;
