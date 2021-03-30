import userState from './types';

export default {
  state: () => ({
    name: 'nit',
  }),

  getters: {},
  mutations: {
    SETNAME(state: userState, payload: any) {
      state.name = payload;
    },
  },
  actions: {
    saveName({ commit } : { commit: any}, payload: string) {
      commit('SETNAME', payload);
    },
  },
};
