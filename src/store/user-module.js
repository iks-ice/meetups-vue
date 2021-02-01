import { mutationTypes, actionTypes } from "./types.js";
import { login, register } from "@/utils/api-services";
const { SAVE_LOGGED_USER } = mutationTypes;
const { LOGIN_USER, REGISTER_USER } = actionTypes;
const user = {
  namespaced: true,

  state: () => ({
    user: null,
  }),

  getters: {},

  mutations: {
    [SAVE_LOGGED_USER](state, { user }) {
      state.user = user;
    },
  },

  actions: {
    async [LOGIN_USER]({ commit }, { body }) {
      const user = await login(body);
      commit(SAVE_LOGGED_USER, { user });
    },
    async [REGISTER_USER]({ commit }, { body }) {
      const user = await register(body);
      commit(SAVE_LOGGED_USER, { user });
    },
  },
};
export default user;
