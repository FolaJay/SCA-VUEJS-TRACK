import Vue from 'vue'
import VueRouter from  'vue-router'
import SignUp from '@/views/signUp.vue'
import Login from '@/views/login.vue'
import Dashboard from '@/views/Dashboard.vue'



Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signUp",
    component: SignUp
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router