<template>
    <form class="form" @submit.prevent="onSubmit">
        <app-list :list="registerFormItems">
            <template v-slot:list="{item}">
                <form-group v-if="item.type !== 'checkbox'" 
                    :label="item.label" 
                    :required="item.required"
                >  
                    <app-input
                        :type="item.type"
                        :name="item.name"
                        v-model="item.value"
                        :placeholder="item.placeholder"
                        autocomplete="email"/>
                </form-group>
                <app-checkbox v-else :type="item.type" v-model="item.value" :label="item.label" />
            </template>
            <template #default>
                <div class="form__buttons">
                    <primary-button :disabled="loading">
                        <template v-if="loading">
                            <app-loader />
                        </template>
                        <template v-else>Зарегистрироваться</template>
                    </primary-button>
                </div>
                <div class="form__append">
                    Есть аккаунт? 
                    <router-link :to="{name: 'login'}" class="link">Войдите</router-link>
                </div>
            </template>
        </app-list>
    </form>
</template>

<script>
import {getRegisterForm, formDataFromArray} from '@/utils/data.js';
import AppList from "@/components/base-components/AppList.vue";
import AppInput from "@/components/base-components/AppInput.vue";
import AppLoader from "@/components/base-components/AppLoader.vue";
import FormGroup from "@/components/base-components/FormGroup.vue";
import PrimaryButton from "@/components/base-components/PrimaryButton.vue";
import AppCheckbox from "@/components/base-components/AppCheckbox.vue";
import { mapActions } from 'vuex';
import {actionTypes} from '@/store/types.js';
export default {
    components: {AppList, FormGroup, AppInput, PrimaryButton, AppCheckbox, AppLoader},
    data() {
        return {
            registerFormItems: getRegisterForm(),
            loading: false,
        };
    },
    inject: {
        success: "success",
        error: "error",
    },
    methods: {
        ...mapActions('user/', {
            register: actionTypes.REGISTER_USER,
        }),
        async onSubmit() {
            const body = formDataFromArray(this.registerFormItems);
            delete body.termsAccepted;
            try {
                this.loading = true;
                await this.register({body});
                this.success("User successfully registered");
            } catch (error) {
                this.error(error.message);
            } finally {
                this.loading = false;
            }
        }
    }
}
</script>

<style>

</style>