<template>
    <div>
        <div @click="setAddress">收货地址</div>
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
        
    }
}
</script>

<style>

</style>
