// src/stores/auth.ts
import { defineStore } from 'pinia';
import { auth } from '../firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';

interface AuthState {
  user: User | null;
  isUserLoggedIn: boolean;
}

export const useAuthStore = defineStore('auth', {
  state: (): AuthState => ({
    user: null,
    isUserLoggedIn: false,
  }),
  actions: {
    async register(email: string, password: string) {
      try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        this.user = user;
        this.isUserLoggedIn = true;
        return true;
      } catch (error) {
        console.error('Error registering: ', error);
        return false;
      }
    },
    async login(email: string, password: string) {
      try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        this.user = user;
        this.isUserLoggedIn = true;
        return true;
      } catch (error) {
        console.error('Error logging in: ', error);
        return false;
      }
    },
    async logout() {
      try {
        await signOut(auth);
        this.user = null;
        this.isUserLoggedIn = false;
      } catch (error) {
        console.error('Error logging out: ', error);
      }
    },
    async checkAuth() {
      const user = auth.currentUser;
      if (user) {
        this.user = user;
        this.isUserLoggedIn = true;
        return true;
      }
      this.user = null;
      this.isUserLoggedIn = false;
      return false;
    },
    setUser(user: User | null) {
      this.user = user;
    },
  },
});
