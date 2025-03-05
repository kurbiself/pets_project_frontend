<template>
     <button type="button" @click="onLogOut">Подтвердите</button>
</template>


<script>
export default {
  methods: {
    onLogOut(){ 
        console.log(localStorage.access_token)
        localStorage.access_token = null
        this.$router.push("/")
        console.log(localStorage.access_token)
    },
  }
}
</script>