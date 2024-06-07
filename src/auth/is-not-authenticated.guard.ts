import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const isNotAuthenticatedGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  await authStore.checkAuth();

  const user = authStore.user;

  if (user) {
    return next({ name: 'home-view' });
  }

  return next();
};

export default isNotAuthenticatedGuard;
