import { createRouter, createWebHistory } from 'vue-router'
import homepage from '../pages/homepage.vue'
import user from '../components/user.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'homepage',
      component: homepage
    },
    {
      path: '/user',
      name: 'user',
      component: user
    }
  ]
})

export default router
