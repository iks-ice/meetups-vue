<template>
  <form class="form" @submit.prevent="onSubmit">
    <app-list :list="loginFormItems">
      <template #list="{item}">
        <form-group :label="item.label" :required="item.required">
          <app-input
            v-model="item.value"
            :type="item.type"
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
          <router-link :to="{ name: 'register' }" class="link"
            >Зарегистрируйтесь</router-link
          >
        </div>
      </template>
    </app-list>
  </form>
</template>

<script>
  import { getLoginForm, formDataFromArray } from "@/utils/data.js";
  import AppList from "@/components/base-components/AppList.vue";
  import AppInput from "@/components/base-components/AppInput.vue";
  import AppLoader from "@/components/base-components/AppLoader.vue";
  import FormGroup from "@/components/base-components/FormGroup.vue";
  import PrimaryButton from "@/components/base-components/PrimaryButton.vue";
  import { mapActions } from "vuex";
  import { actionTypes } from "@/store/types.js";
  export default {
    components: { AppList, FormGroup, AppInput, PrimaryButton, AppLoader },
    inject: {
      success: "success",
      error: "error",
    },
    data() {
      return {
        loginFormItems: getLoginForm(),
        loading: false,
      };
    },
    methods: {
      ...mapActions("user/", {
        login: actionTypes.LOGIN_USER,
      }),
      async onSubmit() {
        const body = formDataFromArray(this.loginFormItems);
        try {
          this.loading = true;
          await this.login({ body });
        } catch (error) {
          this.error(error.message);
        } finally {
          this.loading = false;
        }
      },
    },
  };
</script>

<style></style>
