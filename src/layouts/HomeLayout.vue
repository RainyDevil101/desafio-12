<script setup lang="ts">
import { RouterView } from 'vue-router';
import NavComponent from '../components/NavComponent.vue';
import ContainerComponent from '@/components/ContainerComponent.vue';

</script>
<template>
  <NavComponent />
  <ContainerComponent>
    <RouterView />
  </ContainerComponent>

</template>