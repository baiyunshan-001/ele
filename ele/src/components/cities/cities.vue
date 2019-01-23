<template>
    <div>
        <ul class='city-all'>
            <li v-for="(item,index) in cities" :key="index" class='city-item'>
                <p class='city-title'>{{item[0]}}</p>
                
                <ul class='city-item-cities'>
                    <li v-for='city in item[1]' :key="city.id" class='text' >
                        {{city.name}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    created(){
        this.$store.dispatch('city/getCities')
    },
    methods:{
        formatCities(cities) {
            const arr = []
            for (let key in cities) {
                arr.push([key, cities[key]])
            } 
            return arr.sort((a, b) => {
                if (a[0] > b[0]) {
                    return 1
                }
                if (a[0] < b[0]) {
                    return -1
                }
            })
        },
    },
    computed:{
        cities(){
            var all=this.$store.state.city.cities
            var allcities=this.formatCities(all)
            return allcities
        }
    }
}
</script>

<style>
.city-all {
    margin-top: 0.2rem;
    background: #fff;
    font-size: 0.28rem;
    }
.city-all .city-title {
    display: block;
    padding: 0.2rem;
    border-bottom: 1px solid #eee;
}
.city-item-cities {
  display: flex;
  flex-wrap: wrap;
}
</style>
