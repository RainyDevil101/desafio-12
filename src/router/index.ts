import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import NotFoundView from '../views/NotFoundView.vue';
import { auth } from '../firebaseConfig';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/layouts/HomeLayout.vue'),
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView,
        },
      ],
    },
    {
      path: '/auth',
      name: 'auth',
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const currentUser = auth.currentUser;
  console.log(currentUser);

  if (requiresAuth && !currentUser) {
    next('/auth/login');
  } else {
    next();
  }
});

export default router;
