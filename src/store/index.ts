import { createStore } from 'vuex'

import user from './modules/user';
import training from './modules/trainings';


const store = createStore({
  modules: {
    user,
    training,
  }
})

export default store;