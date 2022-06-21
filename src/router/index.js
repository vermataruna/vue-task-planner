import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AddTask from "@/views/AddTask";
import EditTask from "@/views/EditTask";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/addTask',
    name: 'addTask',
    component: AddTask
  },
  {
    path: '/tasks/:id',
    name: 'editTask',
    component: EditTask,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
