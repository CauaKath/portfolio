import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import Games from '../pages/Games.vue'
import Blog from '../pages/Blog.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/games',
      name: 'games',
      component: Games
    },
    {
      path: '/blog',
      name: 'blog',
      component: Blog
    }
  ]
})

export default router
