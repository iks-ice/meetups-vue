import Vue from "vue";
import Vuex from "vuex";
import { meetups, user } from "./modules";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    meetups,
    user,
  },
});
