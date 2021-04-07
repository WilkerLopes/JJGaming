import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import(/* webpackChunkName: "index" */ '../views/index/Index.vue')
  },
  {
    path: '/user',
    name: 'user',
    component: () => import(/* webpackChunkName: "user" */ '../views/dashboard/index/Index.vue'),
    children:[
      {
        path: '',
        name: 'profile',
        component: () => import(/* webpackChunkName: "home" */ '../views/dashboard/home/Home.vue')
      },
      {
        path: 'games',
        name: 'games',
        component: () => import(/* webpackChunkName: "games" */ '../views/dashboard/games/Games.vue')
      },
    ]
  },
  {
    path: '/game/:dev_name/:game_name',
    name: 'game-render',
    component: () => import(/* webpackChunkName: "render" */ '../views/game/Game.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '../views/errors/404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
