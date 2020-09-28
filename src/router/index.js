/*
 * @Author: your name
 * @Date: 2020-09-27 18:20:48
 * @LastEditTime: 2020-09-28 14:04:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \zt\src\router\index.js
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
// import pageLayout from '../views/layout/pageview.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/',
    name: '',
    component: () => import( /* webpackChunkName: "about" */ '../views/zt/index.vue')
    // redirect: '/home',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/zt/index.vue')
    // children: [{
    //   path: '/home',
    //   name: 'Home',
    //   component: () => import( /* webpackChunkName: "about" */ '../views/zt/index.vue')
    // }]
  },
  {
    path: '/history',
    name: 'history',
    redirect: '/home/history',
    component: () => import( /* webpackChunkName: "about" */ '../views/layout/menue.vue'),
    children: [{
        path: '/home/history',
        name: 'history-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/history.vue')
      },
      {
        path: '/home/economics',
        name: 'economics-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/economics.vue')
      },{
        path: '/home/facilities',
        name: 'facilities-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/facilities.vue')
      },{
        path: '/home/sociology',
        name: 'sociology-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/sociology.vue')
      },{
        path: '/home/government',
        name: 'government-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/government.vue')
      },{
        path: '/home/county',
        name: 'county-home',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/county.vue')
      }]
  },
  {
    path: '/video',
    name: 'video',
    redirect: '/video/live',
    component: () => import( /* webpackChunkName: "about" */ '../views/layout/menue-live.vue'),
    children: [{
        path: '/video/live',
        name: 'video-live',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/video/live.vue')
      },
      {
        path: '/video/live2',
        name: 'video-live2',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/video/live2.vue')
      },{
        path: '/video/live3',
        name: 'video-live3',
        component: () => import( /* webpackChunkName: "about" */ '../views/zt/video/live3.vue')
      }]
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router