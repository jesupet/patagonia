import { createRouter, createWebHashHistory } from 'vue-router'
import HomePatagonia from '../views/HomePatagonia.vue'
import ThankYouPage from '../views/ThankYouPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomePatagonia
  },
  {
    path: '/thankyou',
    name: 'thankyou',
    component: ThankYouPage
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    if (to.hash) {
      // BEFORE:
      // return { selector: to.hash }

      return { el: to.hash }
    }
    return { x: 0, y: 0 };
  },
})

export default router
