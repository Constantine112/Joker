import types from '../types/user'
import { myAxios } from '@/utils/interaction'

// console.log("+++", types);
// const namespaced = true;
const state = {
  id: undefined,
  // userAccount: '',
  // userPassword: '',
  allUsers: [],
  success: false
}

const getters = {

}

const actions = {

 
  
}

const mutations = {
  [types.mutations.setInfo]: (state, datas) => {
    state.success = true
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
