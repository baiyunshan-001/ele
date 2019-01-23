<template>
  <div class='city-info'>
    <p>当前定位城市:
      <router-link tag='span' :to="'/v1/cities/'+guessCity.id">{{guessCity.name}}</router-link>
    </p> 
    <p>定位不准时，请在列表中选择</p> 
  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  created(){
    this.$store.dispatch('city/getNowCity')
  },
  computed:{
    guessCity(){
      return this.$store.state.city.nowCity
    }
  }
}
</script>

<style>
  .city-info{
    display: flex;
    justify-content: space-between;
    height: 0.88rem;
    align-items: center;
    padding: 0.2rem;
    border-bottom: solid 1px #eee;
  }
  .city-info p{
    font-size: 0.28rem;
  }
</style>
