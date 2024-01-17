import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodView from '../views/FoodView.vue'
import KeranjangView from '../views/KeranjangView.vue'
import FoodDetail from '../views/FoodDetail.vue'
import PesananSukses from '../views/PesananSukses.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/food',
    name: 'food',
    component: FoodView
  },
  {
    path: '/food/:id',
    name: 'foodetail',
    component: FoodDetail
  },
  {
    path: '/keranjang',
    name: 'keranjang',
    component: KeranjangView
  },
  {
    path: '/pesanan-sukses',
    name: 'PesananSukses',
    component: PesananSukses
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
