<template>
    <div>
        <top>
            <router-link slot='to' to='/' tag='span' >
                <img src="../../public/gao-img/search.png" alt="">
            </router-link>
            <div @click="setAddress">{{addr.name}}</div>
            <router-link slot='control' to='/v2/login' tag='span'>登录|注册 </router-link>
        </top>
        <banner></banner>
        <shop-list></shop-list>
    </div>
</template>

<script>
import top from '../components/top'
import banner from '../components/index/banner'
import shopList from '../components/index/shopList'
export default {
    components:{
        top,banner,shopList
    },
    methods:{
       setAddress(){
           this.$router.push('/v1/cities')
       }
    },
  
    computed:{
        addr(){
            return this.$store.state.city.addr
        }
    }
}
</script>

<style>

</style>
