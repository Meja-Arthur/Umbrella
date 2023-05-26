import { createRouter, createWebHistory } from 'vue-router'

import Login from '../views/Login.vue'
import SignUp from '../views/SignUp.vue'
import Home from '../views/Home.vue'
import PasswordReset from '../views/PasswordReset.vue'
import PasswordResetConfirm from '../views/PasswordResetConfirm'

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  }, 
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },

  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/password/reset',
    name: 'passwordReset',
    component: PasswordReset,
  },
  {
    path: '/password/reset/confirm/:uid/:token',
    name: 'passwordResetConfirm',
    component: PasswordResetConfirm,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
