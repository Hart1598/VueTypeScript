import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: () => import('../views/Users.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  linkActiveClass: 'active'
})

export default router
