<script>
export default {
  computed : {
      logged_out: function(){
        return localStorage.access_token == null
      }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="@/assets/pet.png" width="250" height="150" />

    <div class="wrapper">
      Любимые питомцы
      <br/>
      
      {{ logged_out }}
      <nav>
        
        <router-link to="/petstypeslist">Типы питомцев</router-link>
        <router-link to="/ownerslist">Владельцы</router-link>
        <router-link to="/petslist">Питомцы</router-link>

        <router-link v-if="logged_out" to="/login" >Войти</router-link>
        <router-link v-else  to="/logout" >Выйти</router-link>
        {{ logged_out }}
      </nav>
    </div>
  </header>
  <router-view />
</template>

<style scoped>

header {
  line-height: 1.5;
  max-height: 100vh;
  color: rgb(139, 215, 234);
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
  
}

nav a.router-link-exact-active {
  color: #ffff
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  
}

nav a {
  display: inline-block;
  padding: 1rem;
  border-left: 1px solid #ffff;
  color: #2c6b7a;
  border-radius: 0;
}

nav a:first-of-type {
  border: none;
}

@media (min-width: 1024px) {

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
    
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
    
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
    
  }
}
</style>
