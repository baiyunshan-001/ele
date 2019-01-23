<template>
    <div class="top">
        <div class="top-left">
            <
        </div>
        <div class="top-main"><slot></slot></div>
        <div class="top-right"><slot name='control'></slot></div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    .top{
        height: 48px;
        padding: 0 10px;
        background: #0085ff;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items:center;
        
    }
    .top div{
        flex: 1;
    }
    .top div:nth-child(2){
        text-align: center;
    }
    .top div:nth-child(3){
        text-align:right;
    }
</style>
