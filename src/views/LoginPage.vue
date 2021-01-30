<template>
    <auth-component>
        <template #header>
            Вход
        </template>
        <template #default>
            <form class="form" @submit.prevent="onSubmit">
                <app-list :list="loginFormItems">
                    <template v-slot:list="{item}">
                        <form-group :label="item.label" :required="item.required">
                            <app-input :type="item.type" 
                                v-model="item.value" 
                                :placeholder="item.placeholder" 
                                autocomplete="email"
                                :name="item.name"
                            />
                        </form-group>
                    </template>
                    <template #default>
                        <div class="form__buttons">
                             <primary-button :disabled="loading">
                                <template v-if="loading">
                                    <app-loader />
                                </template>
                                <template v-else>Войти</template>
                            </primary-button>
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
import AppLoader from "@/components/base-components/AppLoader.vue";
import FormGroup from "@/components/base-components/FormGroup.vue";
import PrimaryButton from "@/components/base-components/PrimaryButton.vue";
import http from "@/utils/http-client.js";
export default {
    name: "LoginPage",
    components: {AuthComponent, AppList, FormGroup, AppInput, PrimaryButton, AppLoader},
    data() {
        return {
            loginFormItems: getLoginForm(),
            loading: false,
        };
    },
    inject: {
        success: "success",
        error: "error",
    },
    methods: {
        async onSubmit() {
            const body = formDataFromArray(this.loginFormItems);
            try {
                this.loading = true;
                await http("/auth/login", {body});
            } catch (error) {
                this.error(error.message)
            }
            finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style>

</style>