import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PetsTypesList from '@/components/PetsTypesList.vue'
import OwnersList from '@/components/OwnersList.vue'
import PetsList from '@/components/PetsList.vue'
import BreedsList from '@/components/BreedsList.vue'
import LoginForm from '@/components/LoginForm.vue'
import LogOutForm from '@/components/LogOutForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/petstypeslist',
      name: 'petstypeslist',
      component: PetsTypesList
    },
    {
      path: '/ownerslist',
      name: 'ownerslist',
      component: OwnersList
    },
    {
      path: '/petslist',
      name: 'petslist',
      component: PetsList
    },
    {
      path: '/breedslist/:type_id',
      name: 'breedslist',
      component: BreedsList,
      props: true
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },
    
    {
      path: '/logout',
      name: 'logout',
      component: LogOutForm
    },
  ],
})

export default router
