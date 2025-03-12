import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PetsTypesList from '@/components/PetsTypesList.vue'
import OwnersList from '@/components/OwnersList.vue'
import PetsList from '@/components/PetsList.vue'
import BreedsList from '@/components/BreedsList.vue'
import LoginForm from '@/components/LoginForm.vue'
import LogOutForm from '@/components/LogOutForm.vue'
import PetsDetails from '@/components/PetsDetails.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
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
    {
      path: '/petsdetails/:id',
      name: 'petsdetails',
      component: PetsDetails,
      props: true
    },
  ],
})

export default router
