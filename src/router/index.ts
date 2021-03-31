import { createRouter, createWebHistory} from 'vue-router'
import Home from '/src/components/Home.vue'
import Trainings from '/src/trainings/Trainings.vue'
import AddTraining from '/src/trainings/AddTraining.vue'
import Calendar from '/src/calendar/Calendar.vue'
import Login from '/src/login/Login.vue'

const routes = [
  { 
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/trainings',
    name: 'Trainings',
    component: Trainings
  },
  {
    path: '/calendar',
    name: 'Kalender',
    component: Calendar
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/add-training',
    name: 'Training hinzufügen',
    component: AddTraining
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router; 