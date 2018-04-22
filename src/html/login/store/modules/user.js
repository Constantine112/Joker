import types from '../types/user'
import { myAxios, IP } from '@/utils/interaction'

// console.log("+++", types);
// const namespaced = true;
const state = {
    id: undefined,
    // userAccount: '',
    // userPassword: '',
    allUsers: []
}

const getters = {

}

const actions = {

    [types.actions.login]: (context, data) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {

            // context.commit("exit",{
            //     id: 1,
            //     userName: 'czs',
            //     account: '8888888888',
            //     admin: 0
            // })
            // resolve({
            //     state: true,
            //     info: 'success'
            // })

            myAxios({
                method: 'get',
                url: '/login',
                data:JSON.stringify(data),
            }).then(function(res){
                if(res.data.state.toString()==="0"){
                    context.commit(types.mutations.setInfo,res.data.data)
                    resolve({
                        state: true,
                        info: res.data.stateInfo}
                    )
                }else{
                    resolve({
                        state: false,
                        info: res.data.stateInfo}
                    )
                }
            }).catch(function(err){
                reject(err)
            })
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
