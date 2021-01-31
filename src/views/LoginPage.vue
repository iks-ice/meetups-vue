<template>
    <auth-component>
        <template #header>
            Вход
        </template>
        <template #default>
            <login-form />
        </template>
    </auth-component>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';
import AuthComponent from '@/components/AuthComponent.vue';
export default {
    name: "LoginPage",
    components: {AuthComponent, LoginForm,},
}
</script>

<style>

</style>