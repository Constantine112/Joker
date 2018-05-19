// import types from '../types/visual'
import { myAxios, IP } from '@/utils/interaction'


const state = {
    chartDatas: null
}

const actions = {


    

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
