<template>
  <div>
    <form id="login_form">
      <input
        type="text"
        size="50"
        form="login_form"
        v-model.lazy.trim="username"
      />
      <br/>
      <input
        type="password"
        size="50"
        form="login_form"
        v-model.lazy.trim="password"
      />
      <br/>
      <button type="button" form="login_form" @click="onLogin">Войти</button>
      <button type="button" form="login_form" @click="onCancel">Отмена</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onLogin(){
        this.$http.post("auth/jwt/create/", {
            username: this.username,
            password: this.password
        }).then(response => {
            localStorage.access_token = response.data.access
        })
        this.$router.push("/")
    },
    onCancel (){
        this.$router.back()
    }
  }
}
</script>

<style></style>
