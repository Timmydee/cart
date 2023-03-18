import { createRouter, createWebHistory } from 'vue-router'
import Counter from './components/CounterApp.vue'
// import NotFound from '../src/components/NotFound.vue'
import HomeApp from '../src/components/HomeApp.vue'

const routes = [
  {
    path: '/',
    name: 'HomeApp',
    component: HomeApp
  },
  {
    path: '/counter',
    name: 'Counter',
    component: Counter
  }
]
const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router