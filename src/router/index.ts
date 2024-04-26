import { createRouter, createWebHistory } from 'vue-router'
import WhoAmI from '../views/WhoAmIView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'whoami',
      component: WhoAmI
    },
    {
      path: '/archive',
      name: 'Archive',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ArchiveView.vue')
    },
    {
      path: '/catalogue',
      name: 'Catalogue',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/CatalogueView.vue')
    }
  ]
})

export default router
