import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex)
const state = {
    json: [],
};

const mutations = {
  setJson(state, data){
    state.json = data;
  }
}

const actions = {
  getJson(context){
    fetch('http://127.0.0.1:3000/getJson').then(function (res) {
      console.log(res);
      if(res.status === 200){
        return res.json()
      }
    }).then(function (json) {
      context.commit('setJson', Array.from(json));
    })
  }
};

export const store = new Vuex.Store({
  state: state,//状态数据
  mutations: mutations,//可以修改state
  actions: actions,//可以通过.commit()驱动mutations修改state，
                  //需要在组件中通过store.dispatch("actionName")激发
})