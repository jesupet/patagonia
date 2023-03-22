import { createRouter, createWebHashHistory } from 'vue-router'
import HomePatagonia from '../views/HomePatagonia.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePatagonia
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
