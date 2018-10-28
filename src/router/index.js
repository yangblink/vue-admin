import Vue from 'vue'
import Router from 'vue-router'
import asyncRoute from './asyncRoute'

Vue.use(Router)

import layout from '@/views/layout'

export { asyncRoute }

export const  constantRouteMap = [
  { path: '/404', component: () => import('@/views/404'), hidden: true },
  { path: '/login', component: () => import('@/views/login'), hidden: true },
  {
    path: '/', 
    component: layout,
    redirect: 'dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard')
    }]
  }
]

export default new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouteMap
})
