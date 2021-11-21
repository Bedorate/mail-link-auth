import Vuex from 'vuex';
import { auth } from './auth/index';

import createPersistedState from "vuex-persistedstate";

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState()
  ]
});