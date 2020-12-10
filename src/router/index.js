import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/counter',
    name: 'counter',
    component: () => import('../views/Counter.vue')
  },
  {
    path: '/countries',
    name: 'Countries',
    component: () => import('../views/Countries.vue')
  },
  {
    path: '/countries/:name',
    name: 'Country',
    props: true,
    component: () => import('../views/Country.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
