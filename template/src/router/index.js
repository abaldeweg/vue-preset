import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../views/IndexView')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/ProfileView')
  },
  {
    path: '*',
    name: 'not-found',
    component: () => import('../views/NotFoundView')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  store.commit('showOffCanvas', false)
  next()
})

export default router
