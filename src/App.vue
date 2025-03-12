<script>
import UserComponent from './components/UserComponent.vue';
export default {
  components: {
    UserComponent,
  }
}
</script>

<template>
  <header>
    <h1 class="title">
      Любимые питомцы
      <img class="logo" src="@/assets/pet.png" width="250" height="150" />
    </h1>
    <div>
      <nav class="main_nav">
        <router-link to="/petstypeslist">Типы питомцев</router-link>
        <router-link to="/ownerslist">Владельцы</router-link>
        <router-link to="/petslist">Питомцы</router-link>
        <user-component class="exit_nav" />
      </nav>
    </div>
  </header>
  <router-view />
</template>

<style scoped>
header {
  display: flex;
  color: rgb(139, 215, 234);
  min-width: 1024px;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  /*background-color: rgb(64, 178, 198);*/
  text-align: center;
  font-size: 20px;
  padding: 18px;
  position: absolute; /* Абсолютное позиционирование */
  top: 20px; /* Положение от верхнего края */
  right: 10px;
  width: 900px; /* Ширина блока */
}
.exit_nav {
  font-size: 20px;
  padding: 18px;
  margin-left: 100px;
  border: 2px solid #205a91;
  border-radius: 20px;
}
.exit_nav:hover {
  border: 0px;
}
.exit_nav:focus {
  border: 0px;
}

nav a.router-link-exact-active {
  color: #ffffff;
}
</style>
