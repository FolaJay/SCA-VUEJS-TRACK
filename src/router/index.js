import Vue from 'vue'
import VueRouter from  'vue-router'
import SignUp from '@/views/signUp.vue'
import Login from '@/views/login.vue'
import dashboard from '@/views/Dashboard.vue'
import Expenselist from '@/views/expenselist.vue'
import newExpense from '@/views/createExpense.vue'
import Income from '@/views/income.vue'
import budget from '@/views/budget.vue'
import newBudget from '@/views/createBudget.vue'
import savings from '@/views/createSavings.vue'




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
    component: dashboard
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
  },
  {
    path: '/income',
    name: 'income',
    component: Income
  },
  {
    path: '/budget',
    name: 'budget',
    component: budget
  },
  {
    path: '/createBudget',
    name: 'newBudget',
    component: newBudget
  },
  {
    path: '/createSavings',
    name: 'savings',
    component: savings
  },

]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router