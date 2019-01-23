import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Index from './views/Index'
import cities from './views/cities'
import city from './views/city'
export default new Router({
 
  routes: [
    {
      path:'/',
      component:Index
    },
    {
      path:'/v1/cities',
      component:cities,
    },
    {
      path:'/v1/cities/:id',
      component:city
    }
  ]
})
