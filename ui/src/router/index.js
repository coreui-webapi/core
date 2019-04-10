import Vue from 'vue'
import Router from 'vue-router'

// Containers
const DefaultContainer = () => import('@/containers/DefaultContainer')

// Views
const Dashboard = () => import('@/views/Dashboard')

const Document = () => import('@/views/document')

const Memo = () => import('@/views/memo/Memo')//memo창을 새로 만듦 그리고 router에서 import

const Board = () => import('@/views/document/Board')



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
          component: Dashboard
        },
        {
          path: 'document',
          name: 'Document',
          component: Document
        },
        {
          path: 'memo',
          name: 'Memo',
          component: Memo
        },
        {
          path: 'document/board',
          name: 'Board',
          component: Board
        },
        {
          path: 'document/board/:id',
          component: Board
        }
      ]
    }
  ]
})
