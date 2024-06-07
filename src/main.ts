import './assets/index.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { auth } from './firebaseConfig';
import App from './App.vue';
import router from './router';
import { useAuthStore } from './stores/auth';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const authStore = useAuthStore();
auth.onAuthStateChanged((user) => {
  authStore.setUser(user);
  if (user) {
    router.push('/');
  } else {
    router.push('/auth/login');
  }
});

app.mount('#app');
