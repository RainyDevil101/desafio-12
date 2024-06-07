<script setup lang="ts">
import { RouterView } from 'vue-router';
import ContainerComponent from '../components/ContainerComponent.vue';

</script>
<template>
  <div class="w-screen h-screen flex justify-center items-center">
    <ContainerComponent>
      <RouterView />
    </ContainerComponent>
  </div>
</template>