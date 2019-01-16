import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Index from './views/Index'
import cities from './views/cities'
export default new Router({
 
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path:'/v1/cities',
      component:cities
    }
   
  ]
})
