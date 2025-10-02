import { createRouter, createWebHistory } from 'vue-router'

import favorite_page from '@/components/favorite_page.vue'
import history_page from '../components/history_page.vue'
import Test_page from "../components/test_page.vue"
import Profile from '../components/profile.vue'
import Main from '../components/main.vue'
import Authorization from '../components/Authorization.vue'
import Registration from '../components/registration.vue'
import { compile } from 'vue'

const routes = [
  {
    path: '/',
    name: 'Authorization',
    component: Authorization
  },
  {
    path: "history_page",
    name: "History_page",
    component: history_page
  },
  {
    path: "profile",
    name: "Profile",
    component: Profile
  },
  {
    path: "favorite_page",
    name: "Favorite_page",
    component: favorite_page
  },
  {
    path: "test_page",
    name: "Test_page",
    component: Test_page
  },
  {
    path: '/main',
    name: 'Main', 
    component: Main
  },
  {
    path: '/register', 
    name: 'Registration',
    component: Registration
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router