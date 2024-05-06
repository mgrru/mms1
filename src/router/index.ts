import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'
import LogView from '@/components/log/log.vue'
import AddView from '@/components/user/add.vue'
import SelectView from '@/components/user/select.vue'
import UpdateView from '@/components/user/update.vue'
import DeleteView from '@/components/user/del.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: HomeView,
      children: [
        {
          path: '/about',
          component: AboutView
        },
      ]
    },
    {
      path: '/log',
      component: HomeView,
      children: [
        {
          path: '/log/select',
          name: 'log',
          component: LogView
        },
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: HomeView,
      children: [
        {
          path: '/user/add',
          component: AddView
        },
        {
          path: '/user/update/:id/:name',
          name:'update',
          component: UpdateView,
          props: true
        },
        {
          path: '/user/select',
          component: SelectView
        },
      ]
    },
  ]
})

export default router
