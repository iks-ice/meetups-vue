<template>
  <header class="header text-center">
    <h1>
      <router-link :to="{name: 'index'}">
          <img src="@/assets/logo.svg" alt="logo">
      </router-link>
    </h1>
    <nav>
      <router-link v-if="$route.matched.some(({meta}) => meta.showReturn)" :to="{name: 'meetups'}">&larr; Вернуться к списку</router-link>
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