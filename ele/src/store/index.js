import Vue from 'vue'
import Vuex from 'vuex'
import axios from '../axios'

Vue.use(Vuex)
import city from './modules/city'
import index from './modules/index'
export default new Vuex.Store({
  state: {
   
  },
  mutations: {
    
  },
  actions: {
   
  },
  modules:{
    city,index
  }
})
