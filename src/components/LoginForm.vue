<template>
  <div class="authorization_form">
    <form id="login_form">
      <label> Введите логин <br /> </label>
      <input
        type="text"
        size="50"
        form="login_form"
        v-model.lazy.trim="username"
      />
      <br />
      <label> Введите пароль <br /> </label>
      <input
        type="password"
        size="50"
        form="login_form"
        v-model.lazy.trim="password"
      />
      <br />
      <div class="auth_button">
        <button class="login_button" type="button" form="login_form" @click="onLogin">Войти</button>
        <button class="login_button" type="button" form="login_form" @click="onCancel">
          Отмена
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async onLogin() {
      await this.$store.dispatch("obtainToken", {
        username: this.username,
        password: this.password,
      });
      this.$router.push("/");
      // this.$http.post("auth/jwt/create/", {
      //     username: this.username,
      //     password: this.password
      // }).then(response => {
      //     localStorage.access_token = response.data.access
      // })
      this.$router.push("/");
    },
    onCancel() {
      this.$router.push("/");
    },
  },
};
</script>

<style>
.authorization_form {
  display: flex;
  justify-content: center;
  margin: auto;
}
.authorization_form input {
  border: 2px solid #205a91;
  border-radius: 5px;
  height: 25px;
  background-color: rgba(255, 255, 255, 0.111);
  margin-top: 10px;
  margin-bottom: 10px;
}
.authorization_form input:focus {
  border: 3px solid #555;
}
.authorization_form label {
  font-size: 20px;
  padding: 18px;
  margin-left: 100px;
  margin-top: 10px;
  color: #205a91;
}
.auth_button {
  display: flex;
  justify-content: center;
}
.auth_button button {
  margin-top: 10px;
  margin-left: 10px;
  text-align: center;
  font-size: 18px;
  background-color: #1797b1;
  border: 2px solid #1797b1;
  border-radius: 100px;
  color: #fff;
  cursor: pointer;
  height: 50px;
  line-height: 48px;
  outline: none;
  padding: 0 30px 0 25px;
  transition: all 0.3s;
}
.auth_button button:hover {
  background-color: #29b4d0;
  border-color:#29b4d0;
}
</style>
