<template>
  <div class="banner">
    <ul>
       <li v-for="food in entry" :key="food.id" >
        <img :src="'https://fuss10.elemecdn.com/'+food.image_url" alt="">
        {{food.title}}
      </li>
    </ul>
     
      
   
  </div>
</template>

<script>
export default {
  created(){
    this.$store.dispatch('index/entry');
  
  },
  computed:{
    entry(){
      return this.$store.state.index.entry.splice(8) 
    }
  }
}
</script>

<style>
  .banner{
    padding-top: 0.96rem;
    padding-bottom: 0.3rem;
    border-bottom: 1px solid #e4e4e4;
    background: #fff;
  }
  .banner img {
    margin-bottom: .3rem;
    width: 0.9rem;
  }
  .banner ul{
    display: flex;
    flex-wrap: wrap;
  }
  .banner ul li{
    width: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:.12rem 0;
    color: #666;
    font-size: .24rem;
  }
</style>
