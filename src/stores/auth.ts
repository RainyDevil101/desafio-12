// src/stores/auth.ts
import { defineStore } from 'pinia';
import { auth } from '../firebaseConfig';
import { signInWithEmailAndPassword, signOut, type User } from 'firebase/auth';

interface AuthState {
  user: User | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
  }),
  actions: {
    async login(email: string, password: string) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        this.user = user;
      } catch (error) {
        console.error('Error logging in: ', error);
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
      } catch (error) {
        console.error('Error logging out: ', error);
      }
    },
    setUser(user: User | null) {
      this.user = user;
    },
  },
});
