
// 店铺营业执照

import * as api from '@/api/info/foodBusiness'

const state = {
    info: {}
};

const actions = {
    getLicenseInfo({ commit, state }, payload = {}) {
        const res = Object.assign({}, payload)
        let params:any = {}
        params = res

        return api.getLicenseInfo(params).then((res:any) => {
            let {result} = res
            commit('updateInfo', result)
        }).catch((error) => {
            // Element.Notification.error({
            //     title: '请求异常',
            //     message: error.message || '请求列表出错',
            //     duration: 1500
            // });
        })
    },
};

const mutations = {
    updateInfo(state, payload){
        state.info = payload;
    }
}; 

export default {
    namespaced: true,
    state,
    actions,
    mutations
};