<template>
  <auth-component>
    <template #header>
      Вход
    </template>
    <template #default>
      <register-form />
    </template>
  </auth-component>
</template>

<script>
  import AuthComponent from "@/components/AuthComponent.vue";
  import RegisterForm from "@/components/RegisterForm.vue";
  export default {
    name: "RegisterPage",
    components: { AuthComponent, RegisterForm },
  };
</script>
