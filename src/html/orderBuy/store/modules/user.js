// import types from '../types/user'
import { myAxios, IP } from '@/utils/interaction'

// console.log("+++", types);
// const namespaced = true;
const state = {
    id: undefined,
   	userName: '',
   	account: '',
    admin: 0,   // 0：管理员，1：普通用户
    allUsers: []
}

const getters = {

}

const actions = {

    // ["getMyInfo"]: (context, data) => {
        //context: commit,dispatch,getters,state
 
    // },

    // ["exit"]: (context) => {
        
    // },
}

const mutations = {

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
