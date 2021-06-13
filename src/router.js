import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home'

Vue.use(Router)

export default new Router ({
  mode: 'history',  // обычные слешы в url путях
  routes: [
      {
          path: '/',
          component: Home,

      },
      {
          path: '/todos',
          component: () => import('./views/todos.vue')
      }
  ]

})