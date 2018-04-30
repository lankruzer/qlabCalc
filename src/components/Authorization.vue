<template>
  <div class="authorization">
    <h1>Добрый день! 123</h1>
    <h2>Для доступа к расчёту стоимости проекта введите логин и пароль:</h2>
    <form action="#" method="post">
      <label>
        <input type="text" name="login" v-model="login" placeholder="Введите логин..." required>
      </label>
      <label>
        <input type="password" name="password" v-model="password" placeholder="Введите пароль..." required>
      </label>
      <button type="submit" class="btn-send" @click="authorization">Войти</button>
    </form>
    <p>{{ result }}</p>
  </div>
</template>

<script>
import md5 from 'md5'

export default {
  name: 'authorization',
  data () {
    return {
      currLogin: '70cdbf3b5115e143c1bc9bb760bd06dd',
      currPassword: '2d53a8fb7abf5be7f4a3cf4b565cc75c',
      login: '',
      password: '',
      result: ''
    }
  },
  methods: {
    authorization: function (event) {
      event.preventDefault()
      if (this.currLogin === md5(this.login) && this.currPassword === md5(this.password)) {
        localStorage.setItem('auth', 'true')
        this.$router.push('/jsonCalc')
      } else {
        alert('Неверный логин или пароль!')
      }
    }
  },
  created: function () {
    if (localStorage.getItem('auth')) {
      this.$router.push('/jsonCalc')
    }
  }
}
</script>

<style scoped>
  .authorization {
    text-align: center;
  }

  h2 {
    width: 500px;
    margin-left: auto;
    margin-right: auto;
  }

  form {
    display: block;
    margin: 0 auto;
    max-width: 230px;
  }

  label {
    display: block;
    margin: 0 0 10px;
  }

  label input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 13px 30px;
    font-size: 18px;
    border: 1px solid #2c3e50;
    transition: .25s;
  }

  label input:hover,
  label input:focus {
    border-color: #42b983;
  }

  .btn-send {
    display: inline-block;
    vertical-align: middle;
    margin: 0 0 50px;
    padding: 13px 30px;
    box-sizing: border-box;
    font-size: 18px;
    letter-spacing: 1.5px;
    background-color: #42b983;
    cursor: pointer;
    border: 0;
    transition: .25s;
  }

  .btn-send:hover,
  .btn-send:focus {
    color: #fff;
    background-color: #2c3e50;
  }
</style>
