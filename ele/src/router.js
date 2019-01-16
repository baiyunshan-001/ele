import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Index from './views/Index'
export default new Router({
 
  routes: [
    {
      path:'/',
      component:Index
    }
   
  ]
})
