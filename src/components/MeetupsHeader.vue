<template>
  <header class="header text-center">
    <h1>
      <router-link :to="{ name: 'index' }">
        <img src="@/assets/logo.svg" alt="logo" />
      </router-link>
    </h1>
    <nav>
      <router-link
        v-if="$route.matched.some(({ meta }) => meta.showReturn)"
        :to="{ name: 'meetups' }"
        >&larr; Вернуться к списку</router-link
      >
      <app-list :list="navigations">
        <template #list="{ item }">
          <router-link :to="{ name: item.name }">{{ item.title }}</router-link>
        </template>
      </app-list>
    </nav>
  </header>
</template>

<script>
  import { AppList } from "@/components/base-components";
  export default {
    name: "MeetupsHeader",
    components: {
      AppList,
    },
    props: {
      navigations: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style scoped></style>
