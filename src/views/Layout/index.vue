<template>
    <div>
        <div class="box">我是首页</div>
        <LayoutNav/>
        <LayoutHeader/>
        <RouterView/>
        <LayoutFooter/>
    </div>
</template>

<script setup>
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayouHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
</script>

<style lang="scss" scoped>
// 导入自定义的css样式文件
// 要记得添加@符号
// @import '@/styles/ceshi.css';
// .box {
//     width: 1200px;
//     height: 100px;
//     background-color: pink;
// } 
</style>