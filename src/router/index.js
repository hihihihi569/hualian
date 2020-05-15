import Vue from 'vue'
import VueRouter from 'vue-router'
import movieRouter from './Movie'
import MineRouter from './Mine'
import CinemaRouter from './Cinema'
Vue.use(VueRouter)

const routes = [
  movieRouter,
  MineRouter,
  CinemaRouter,
  { path: '/*', redirect: '/movie' }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
