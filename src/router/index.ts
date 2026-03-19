import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import { useTitle } from '@vueuse/core'
const routerHistory=createWebHashHistory()
const title = useTitle()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      meta:{
        title:'简历'
      },
      component: () => import('@/views/index.vue')
    },
    {
      path: '/ceshi',
      name: 'ceshi',
      component: () => import('@/views/ceshi.vue')
    },
    {
      path: '/gsap',
      name: 'gsap',
      component: () => import('@/views/gsap.vue')
    },
    {
      path: '/gsapTwo',
      name: 'gsapTwo',
      component: () => import('@/views/gsapTwo.vue')
    }
  ]
})
// 全局前置守卫：任何页面的访问都要经过这里
// to：要去哪里的路由信息
// from：从哪里来的路由信息
// next：通行的标志
router.beforeEach((to, from, next) => {
  title.value = <string>(to.meta.title ? to.meta.title : '简历项目')
  next()
  })

export default router
