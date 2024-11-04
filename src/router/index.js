import { createRouter, createWebHistory } from '@ionic/vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes = [
  {
    path: '/login',
    component: () => import("@/views/LoginView.vue")
  },
  {
    path: '/',
    redirect: '/main/home'
  },
  {
    path: '/main/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/main/home'
      },
      {
        path: 'home',
        component: () => import('@/views/HomePage.vue')
      },
      {
        path: 'tab2',
        component: () => import('@/views/Tab2Page.vue')
      },
      {
        path: 'tab3',
        component: () => import('@/views/Tab3Page.vue')
      }
    ]
  },
  {
    path: '/presensi/datang',
    component: () => import('@/views/PresenceCameraView.vue')
  },
  {
    path: '/presensi/datang/perencanaan',
    component: () => import('@/views/PresencePlanningView.vue')
  },
  {
    path: '/presensi/pulang',
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
