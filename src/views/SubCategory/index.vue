<script setup>
import { getCategoryFilterAPI, getSubCategoryAPI } from "@/apis/category"
import {ref, onMounted } from 'vue'
// 导入获取地址栏id的函数
import { useRoute } from 'vue-router'
import GoodsItem from '@/views/Home/components/GoodsItem.vue'

// 定义变量
const categoryData = ref({})
// useRoute().params.id 后面可能还会使用，所以定义一个变量进行保存，空间换时间
const route = useRoute()

// 定义函数
const getCategoryFilter = async () => {
    // 通过地址栏的id获取名字
    const res = await getCategoryFilterAPI(route.params.id)
    console.log(res)
    categoryData.value = res.result
}

// 暂时理解为在创建页面的时候调用函数
onMounted(() => {
    // useRoute()是一个函数，会返回一个对象，通过该对象的params参数可以获取地址栏的id
    getCategoryFilter(route.params.id)
})


// 上面的代码只是对路由进行了操作，还没有渲染真正的数据
// 获取基础列表数据渲染
const goodList = ref([])
const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    // 按照什么进行排序
    sortField: 'publishTime',
})

// 定义函数
const getSubCategory = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    console.log(res)
    goodList.value = res.result
}

 // 调用函数
 onMounted(() => {
    getSubCategory()
 })

// 只是定义，等点击时自动调用
 const tabChange = () => {
    // 小细节，将页面重置为1
    goodList.value.page = 1
    getSubCategory()
 }

const disabled = ref(false)

 // 无限加载
 const load = async () =>  {
    // console.log('无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载无限加载')
    reqData.value.page++
    const res = await getSubCategoryAPI(reqData.value)
    // 旧数据在goodList中，新数据资啊res中
    // 新数据和旧数据拼接在一起就可以达到无限滚动的原理
    goodList.value = [...goodList.value, ...res.result.items]

    // 加载完毕，停止监听
    if (res.result.items.length === 0) {
        disabled.value = true
    }
 }
</script>

<template>
  <div class="container ">
    <!-- 面包屑 -->
    <div class="bread-container">
      <el-breadcrumb separator=">">
        <el-breadcrumb-item to="/">首页</el-breadcrumb-item>
        <el-breadcrumb-item :to="{path: `/category/${categoryData.parentId}`}">
            {{categoryData.parentName}}
        </el-breadcrumb-item>
        <el-breadcrumb-item>{{ categoryData.name }}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="sub-container">
        <!-- 下面需要使用elment组件提供的变量和方法 -->
      <el-tabs v-model="reqData.sortField" @tab-change="tabChange"> 
        <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
        <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
        <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
      </el-tabs>
      <div class="body" v-infinite-scroll="load" :infinite-scroll-disabled="disabled">
        <!-- 商品列表-->
        <!-- :goods="goods" :key"goods.id" 是传递参数给GoodsItem组件，以供它渲染数据 -->
        <GoodsItem v-for="goods in goodList" :goods="goods" :key="goods.id" />
      </div>
    </div>
  </div>

</template>



<style lang="scss" scoped>
.bread-container {
  padding: 25px 0;
  color: #666;
}

.sub-container {
  padding: 20px 10px;
  background-color: #fff;

  .body {
    display: flex;
    flex-wrap: wrap;
    padding: 0 10px;
  }

  .goods-item {
    display: block;
    width: 220px;
    margin-right: 20px;
    padding: 20px 30px;
    text-align: center;

    img {
      width: 160px;
      height: 160px;
    }

    p {
      padding-top: 10px;
    }

    .name {
      font-size: 16px;
    }

    .desc {
      color: #999;
      height: 29px;
    }

    .price {
      color: $priceColor;
      font-size: 20px;
    }
  }

  .pagination-container {
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }


}
</style>