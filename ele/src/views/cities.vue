<template>
    <div class="cities">
        <top>
            <router-link slot='to' tag='span' to='/' >
                 <img src="../../public/gao-img/arrow.png" alt="">
            </router-link>
            选择收货地址
            <span slot='control'>新增地址</span>
        </top>
        <div class="cons">
            <now-city></now-city>
            <hot></hot>
            <cities></cities>
        </div>
       
    </div>
</template>

<script>
import hot from '../components/cities/hot'
import cities from '../components/cities/cities'
import top from '../components/top'
import nowCity from '../components/cities/nowCity'
export default {
    components:{
        hot,cities,top,nowCity
    }
}
</script>

<style>
    .cities{
        width: 7.5rem;
    }
    .cons{
        padding: 0 10px;
        padding-top:0.96rem;
        background: #fff;
    }
</style>
