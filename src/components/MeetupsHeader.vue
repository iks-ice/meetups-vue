<template>
  <header class="header text-center">
    <h1>
      <router-link to="/">
          <img src="@/assets/logo.svg" alt="logo">
      </router-link>
    </h1>
    <nav>
      <router-link to="/login">Вход</router-link>
      <router-link to="/register">Регистрация</router-link>
      <router-link to="/meetup-form">Создать митап</router-link>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
</style>