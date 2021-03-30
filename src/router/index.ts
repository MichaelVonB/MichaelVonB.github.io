import { createRouter, createWebHistory} from 'vue-router'
import Home from '/src/components/Home.vue'
import Trainings from '/src/trainings/Trainings.vue'
import Calendar from '/src/calendar/Calendar.vue'

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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router; 