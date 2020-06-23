import Vue from 'vue'
import VueRouter from  'vue-router'
import SignUp from '@/views/signUp.vue'
import Login from '@/views/login.vue'
import Dashboard from '@/views/Dashboard.vue'
import Expenselist from '@/views/expenselist.vue'
import newExpense from '@/views/createExpense.vue'



Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home
  // },
  {
    path: "/signup",
    name: "signUp",
    component: SignUp
  },
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/expenselist',
    name: 'expenselist',
    component: Expenselist
  },
  {
    path: '/createExpense',
    name: 'newExpense',
    component: newExpense
  }

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router