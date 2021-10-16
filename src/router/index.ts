import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Feed from '@/views/Feed.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Feed, name: 'Feed' },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
