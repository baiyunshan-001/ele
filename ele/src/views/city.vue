<template>
  <div class="city-main">
    <top>
        {{city.name}}
        <a slot='control'>切换城市</a>
    </top>
    <div class="sea-box">
      <input type="text" placeholder="输入学校、商务楼、地址" v-model="val" >
      <button @click="search">提交</button>
    </div>
    <div class="res">
      <ul>
        <li v-for="(city,index) in cityRes" :key="index" @click="getAddr(city)" class="res-con">
          <p>{{city.name}}</p>
          <p>{{city.address}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import top from '../components/top'
export default {
  data(){
    return{
      val:'',
      loading:false
    }
  },
  components:{
    top
  },
  created(){
    var id=this.$route.params.id;
    this.$store.dispatch('city/getCity',id)
  },
  methods:{
    search(){
      var keyword=this.val;
      var city_id=this.city.id;
      this.$store.dispatch('city/search',{keyword,city_id})
    },
    getAddr(addr){
      this.$store.commit('city/getAddr',addr)
      this.$router.push('/');
    }
  },
  computed:{
    city(){
      return this.$store.state.city.city
    },
    cityRes(){
      return this.$store.state.city.cityRes
    }
  }
}
</script>

<style>
  .city-main{
    background: #f5f5f5;
  }
  .sea-box{
    border-top: 1px solid #e4e4e4;
    border-bottom: 1px solid #e4e4e4;
    background:#fff;
    padding:8px 10px;
    display: flex;
    flex-direction: column;
    margin-bottom: 0.3rem;
  }
  .sea-box input{
    outline:none;
    padding:0.1rem;
    border-radius: 0.1rem;
    margin-bottom: .2rem;
    border: 1px solid #e4e4e4;
  }
  .sea-box button{
    border:none;
    background: #3190e8;
    color: #fff;
    height: 0.7rem;
    border-radius: .1rem;
    margin-bottom: .2rem;
    font-size: .32rem;
  }
  .res{
    background: #fff;
    border-top: 1px solid #e4e4e4;
    width: 100%;
  }
  .res .res-con{
    padding-top:0.2rem; 
    border-bottom: 1px solid #e4e4e4;
  }
  .res .res-con p:nth-child(1){
    margin: 0 auto .2rem;
    width: 90%;
    font-size: .28rem;
    color: #333;
  }
  .res .res-con p:nth-child(2){
    margin: 0 auto .2rem;
    width: 90%;
    font-size:.24rem;
    color: #999;
  }
</style>
