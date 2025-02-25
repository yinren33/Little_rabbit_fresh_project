<template>
    <div>
        <div class="box">我是首页</div>
        <LayoutFixed/>
        <LayoutNav/>
        <LayoutHeader/>
        <!-- 这里放置了二级路由出口 -->
        <RouterView/>
        <LayoutFooter/>
    </div>
</template>

<script setup>
    import LayoutNav from './components/LayoutNav.vue'
    import LayoutHeader from './components/LayouHeader.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import LayoutFixed from './components/LayouFixed.vue'

    // 从pinia中导入函数
    import { useCounterStore } from '@/stores/category'
    import { onMounted } from 'vue'

    // 调用从pinia中导入的函数
    // useCounterStore 函数会返回一个对象
    // 调用之后categoryStore是一个拥有一个函数和一个数组的对象
    const categoryStore = useCounterStore()
    onMounted(function() {
        // 调用此方法后，会对categoryStore对象中的数组进行赋值
        categoryStore.getCategory()
        // console.log(categoryStore.categoryList)
    })

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