import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: DefaultContainer,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import('@/views/Dashboard')
        },
        {
          path: 'document',
          name: 'Document',
          component: () => import('@/views/document')
        },
        {
          path: 'memo',
          name: 'Memo',
          component: () => import('@/views/memo/Memo')
        },
        {
          path: 'doc',
          name: 'Doc',
          component: () => import('@/views/doc/Document'),
        },
        {
          path: 'doc/writing',
          name: 'Writing',
          component: () => import('@/views/doc/Writing')
        },
      ]
    }
  ]
})
