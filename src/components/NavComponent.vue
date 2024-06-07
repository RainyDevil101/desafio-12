<script setup lang="ts">
import { RouterLink, useRouter } from 'vue-router'
import ContainerComponent from './ContainerComponent.vue';
import { useAuthStore } from '@/stores/auth';
const authStore = useAuthStore();
const router = useRouter();
const logout = async () => {
  await authStore.logout();
  router.push({ name: 'login' });
}

</script>

<template>
  <nav class="p-4 bg-slate-900">
    <ContainerComponent>
      <div class="flex justify-between">
        <RouterLink to="/">Inicio</RouterLink>
        <button @click="logout">Cerrar sesión</button>
      </div>
    </ContainerComponent>
  </nav>
</template>