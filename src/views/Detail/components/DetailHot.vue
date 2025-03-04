<script setup>
import {fetchHotGoodsAPI} from '@/apis/detail.js'
import { computed, onMounted, ref } from 'vue'
// useRoute 是一个函数
import { useRoute } from 'vue-router'

// 接收从父级传过来的参数
const props = defineProps({
    hotType: {
        type: Number,
    }
})

const hotList = ref([])
// 封装接口
const getHotList = async () => {
    const res = await fetchHotGoodsAPI({
        id: useRoute().params.id,
        type: props.hotType
        // 剩下的一个参数使用它的默认值
    })
    console.log(res.result)
    hotList.value = res.result
}

// 调用函数
onMounted(() => {
    getHotList()
})




// 渲染标题用
const TYPEMAP = {
    1: '24小时周榜',
    2: '周热榜'
}

const title = computed(()=> TYPEMAP[props.hotType])
</script>


<template>
  <div class="goods-hot">
    <!-- 组件的标题 -->
    <h3>{{ title }}</h3>
    <!-- 商品区块 -->
    <RouterLink to="/" class="goods-item" v-for="item in hotList" :key="item.id">
      <img :src="item.picture" alt="" />
      <p class="name ellipsis">{{ item.name }}</p>
      <p class="desc ellipsis">{{ item.desc }}</p>
      <p class="price">&yen;{{ item.peice }}</p>
    </RouterLink>
  </div>
</template>


<style scoped lang="scss">
.goods-hot {
  h3 {
    height: 70px;
    background: $helpColor;
    color: #fff;
    font-size: 18px;
    line-height: 70px;
    padding-left: 25px;
    margin-bottom: 10px;
    font-weight: normal;
  }

  .goods-item {
    display: block;
    padding: 20px 30px;
    text-align: center;
    background: #fff;

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
}
</style>