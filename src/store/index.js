import Vue from "vue";
import Vuex from "vuex";
import meetups from "./meetups-module.js";
import user from "./user-module.js";
Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  modules: {
    meetups,
    user,
  },
});
