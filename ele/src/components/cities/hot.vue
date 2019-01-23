<template>
    <div class="hot-city">
        <p class="title">热门城市</p>
        
        <ul class='hot-con'>
            <li v-for="city in hotCity" :key="city.id" class="text">
                {{city.name}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('city/getHot')
    },
    data(){
        return{

        }
    },
    computed:{
        hotCity(){
            return this.$store.state.city.hotCity
        }
    }
}
</script>

<style>
.hot-city {
  margin-top: 0.4rem;
  background: #fff;
}
.hot-city .title {
  display: block;
  font-size: 0.28rem;
  padding: 0.2rem;
  border-bottom: 1px solid #eee;
}
.hot-city .text, .city-item-cities .text {
    width: 25%;
    font-size: 0.28rem;
    text-align: center;
    height: 0.54rem;
    line-height: 0.54rem;
    border: 1px solid #eee;
    border-top: none;
    border-left: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #3190e8;
}
.hot-city .text:nth-child(4n), .city-item-cities .text:nth-child(4n) {
    border-right: none;
}
.hot-con {
    display: flex;
    flex-wrap: wrap;
}
.hot-con .text{
  display: flex;
  justify-content: center;
  align-items: center
}
</style>
