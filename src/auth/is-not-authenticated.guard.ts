import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import { useAuthStore } from '@/stores/auth';

const isNotAuthenticatedGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const authStore = useAuthStore();

  const user = authStore.user;

  console.log(user);

  if (user) {
    return next({ name: 'home-view' });
  }

  return next();
};

export default isNotAuthenticatedGuard;
