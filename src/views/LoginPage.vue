<template>
    <auth-component>
        <template #header>
            Вход
        </template>
        <template #default>
            <form class="form" @submit.prevent="onSubmit">
                <app-list :list="loginFormItems">
                    <template v-slot:list="{item}">
                        <form-group :label="item.label">
                            <app-input :type="item.type" v-model="item.value" :placeholder="item.placeholder" />
                        </form-group>
                    </template>
                    <template #default>
                        <div class="form__buttons">
                            <primary-button>Войти</primary-button>
                        </div>
                        <div class="form__append">
                            Нет аккаунта? 
                            <router-link :to="{name: 'register'}" class="link">Зарегистрируйтесь</router-link>
                        </div>
                    </template>
                </app-list>
            </form>
        </template>
    </auth-component>
</template>

<script>
import {getLoginForm, formDataFromArray} from '@/utils/data.js';
import AuthComponent from '@/components/AuthComponent.vue';
import AppList from "@/components/base-components/AppList.vue";
import AppInput from "@/components/base-components/AppInput.vue";
import FormGroup from "@/components/base-components/FormGroup.vue";
import PrimaryButton from "@/components/base-components/PrimaryButton.vue";
export default {
    name: "LoginPage",
    components: {AuthComponent, AppList, FormGroup, AppInput, PrimaryButton},
    data() {
        return {
            loginFormItems: getLoginForm(),
        };
    },
    methods: {
        onSubmit() {
            const data = formDataFromArray(this.loginFormItems);
            console.log(data);
            this.$http("login", data);
        }
    }
}
</script>

<style>

</style>