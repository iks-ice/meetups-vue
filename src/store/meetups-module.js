import {mutationTypes, actionTypes} from './types.js';
import {getMeetups} from '@/utils/api-services.js';
const meetups = {
    namespaced: true,
  
    state: () => ({
      meetups: null,
    }),
  
    getters: {},
  
    mutations: {
      [mutationTypes.SAVE_MEETUPS](state, {meetups}) {
        state.meetups = meetups;
      }
    },
  
    actions: {
      async [actionTypes.GET_MEETUPS]({commit}) {
        const meetups = await getMeetups();
        commit(mutationTypes.SAVE_MEETUPS, {meetups});
      }
    },
  };
export default meetups;