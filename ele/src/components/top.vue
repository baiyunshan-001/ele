<template>
    <div class="top">
        <div class="top-left">
            <slot name='to'></slot>
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
        height: 0.96rem;
        padding: 0 10px;
        background: #0085ff;
        color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items:center;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
    .top div{
        flex: 1;
    }
    .top .top-left img{
        width: 0.4rem
    }
    .top div:nth-child(2){
        text-align: center;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .top div:nth-child(3){
        text-align:right;
    }
</style>
