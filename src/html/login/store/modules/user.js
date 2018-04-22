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

    ["getMyInfo"]: (context, data) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {

            context.commit("exit",{
                id: 1,
                userName: 'czs',
                account: '8888888888',
                admin: 0
            })
            resolve({
                state: true,
                info: 'success'
            })

            // myAxios({
            //     method: 'GET',
            //     url: 'user/userInfo',
            // }).then(function(res){
            //     if(res.data.state.toString()==="0"){
            //         context.commit(types.mutations.setInfo,res.data.data)
            //         resolve({
            //             state: true,
            //             info: res.data.stateInfo}
            //         )
            //     }else{
            //         resolve({
            //             state: false,
            //             info: res.data.stateInfo}
            //         )
            //     }
            // }).catch(function(err){
            //     reject(err)
            // })
        })
    },

    ["exit"]: (context) => {
        return new Promise((resolve, reject) => {
            /* resolve({
                state: true,
                info: 'success'
            }) */

            // myAxios({
            //     method: 'GET',
            //     url: '/user/exit',
            // }).then(function(res){
            //     if(res.data.state.toString()==="0"){
            //         resolve({
            //             state: true,
            //             info: res.data.stateInfo}
            //         )
            //     }else{
            //         resolve({
            //             state: false,
            //             info: res.data.stateInfo}
            //         )
            //     }
            // }).catch(function(err){
            //     reject(err)
            // })
        })
    },
}

const mutations = {
    ["setInfo"]: (state, datas) => {
        Object.assign(state,datas)
    },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
