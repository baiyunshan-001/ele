<template>
    <div>
        <div @click="setAddress">{{addr.name}}</div>
    </div>
</template>

<script>
export default {
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
