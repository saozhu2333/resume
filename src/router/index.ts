import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/ceshi'
    },
    {
      path: '/index',
      name: 'index',
      component: () => import('@/views/index.vue')
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: () => import('@/views/ceshi.vue')
    }
  ]
})

export default router
