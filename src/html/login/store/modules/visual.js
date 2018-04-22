import types from '../types/visual'
import { myAxios, IP } from '@/utils/interaction'


const state = {
    chartDatas: null
}

const actions = {

    [types.actions.register]: (context, data) => {
        //context: commit,dispatch,getters,state
        return new Promise((resolve, reject) => {
            // console.log("state is:78910",this.chartDatas);
            /* 模拟数据-begin */
                 // 更新 state 的数据
                // context.commit("setInfo",{
                //     chartDatas: {
                //         xData: ['周一','周二','周三','周四','周五','周六','周日'],
                //         yData: [320, 132, 101, 134, 90, 230, 210]
                //     }
                // })
                // resolve({
                //     state: true,
                //     info: 'success'
                // })
            /* 模拟数据-end */

            /* 实际请求-begin */
                myAxios({
                    method: 'POST',
                    url: 'chart/lineChart',
                    data: JSON.stringify(data),
                }).then(function(res){
                    if(res.data.state.toString()==="0"){

                        // 更新 state 的数据
                        context.commit(types.mutations.setInfo,{
                            chartDatas: res.data.data
                        })
                        resolve({
                            state: true,
                            info: res.data.stateInfo
                        })
                    }else{
                        resolve({
                            state: false,
                            info: res.data.stateInfo
                        })
                    }
                }).catch(function(err){
                    reject(err)
                })
            /* 实际请求-end */

        })
    },

}

const mutations = {
    ["setInfo"]: (state, datas) => {
        // console.log("state is:789",state);
        Object.assign(state,datas);
        // console.log("state is:123456",state);
    },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
};
