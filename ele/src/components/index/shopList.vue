<template>
  <div class="shoplist">
    <p class="title">
      <img src="../../../public/gao-img/shop.png" alt="">
      附近商家</p>
    <ul>
      <li v-for="list in shopList" :key='list.id' class="list" >
        <img :src="'http://elm.cangdu.org/img/'+list.image_path" alt="">
        <div class="list-con">
          <div class="con-first">
             <h4>{{list.name}}</h4>
              <p>
                <span>保</span>
                <span>准</span>
                <span>票</span>
              </p>
          </div>
          <div class="sale">
            月售{{list.recent_order_num}}单
            <p class="spe">
              <span>蜂鸟专送</span>
              <span>准时达</span>
            </p>
          </div>
          <div class="price">
            <p>
              <span>￥{{list.float_minimum_order_amount}}起送</span>
              /
              <span>{{list.piecewise_agent_fee.tips}}</span>
            </p>
            <p>
              <span>
                {{list.distance}}
              </span>
              /
              <span class="order-time">{{list.order_lead_time}}</span>
            </p>
          </div>     
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  created(){
    var latitude=this.latitude
    var longitude=this.longitude
    var limit=20
    if(latitude&&longitude){
      this.$store.dispatch('index/getList',{latitude,longitude,limit})
    }
    
  },
  computed:{
     latitude(){
       return this.$store.state.city.addr.latitude
     },
     longitude(){
       return this.$store.state.city.addr.longitude
     },
     shopList(){
       return this.$store.state.index.shopList
     }     
  }
}
</script>

<style>
  .shoplist{
    background: #fff;
    margin-top: .25rem;
    padding: .15rem;
    border-top: 1px solid #e4e4e4;
  }
  .shoplist .title{
    color: #999;
    font-size: .28rem;
  }
  .shoplist .title img{
    width: 0.34rem;
    vertical-align: middle;
  }
  .shoplist ul .list{
    padding: .25rem 0rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eaeaea;
  }
  .shoplist ul .list img{
    width: 1.4rem;
    height: 1.4rem;
  }
  .shoplist .list .list-con{
    display: flex;
    flex-direction: column;
    width: 78%;
  }
  .shoplist .list .list-con span{
    font-size: 0.24rem;
  }
  .list-con .con-first{
    display: flex;
    justify-content: space-between;
  }
  .list-con .con-first p{
     transform: scale(.8);
  }
  .list-con .con-first span{
    border: 1px solid #f1f1f1;
    color: #999;
   
  }
  .list-con .price,.list-con .sale{
    color: #666;
    font-size: 0.24rem;
    margin-top: 0.2rem
  }
  .list-con .price{
    display: flex;
    justify-content: space-between;
    
  }
  .list-con .price p{
    transform: scale(.9);
  }
  .list-con .price .order-time{
    color: #3190e8;
  }
  .list-con .sale{
    display: flex;
    justify-content: space-between;
    align-items: center
  }
  .list-con .sale .spe{
    transform: scale(.7)
  }
  .list-con .sale .spe span:nth-child(1){
    color: #fff;
    background-color: #3190e8;
    border: .025rem solid #3190e8;
    margin-right: .1rem;
    padding: .02rem ;
    
  }
  .list-con .sale .spe span:nth-child(2){
    color: #3190e8;
    border: .025rem solid #3190e8;
  }
</style>
