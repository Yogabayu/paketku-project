import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: (to) => {
        return "/home";
      }
    },
    {
      path: '/home',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/index.vue')
        }
      ]
    },
    {
      path: '/package',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/package.vue')
        }
      ]
    },
    {
      path: '/ongkir',
      component: () => import('@/layouts/default.vue'),
      children: [
        {
          path: '',
          component: () => import('@/pages/ongkir.vue')
        }
      ]
    }
  ]
})

export default router
