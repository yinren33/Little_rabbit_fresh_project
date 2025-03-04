<script setup>
import { getCategoryAPI } from '@/apis/layout'
import { onMounted ,ref } from 'vue'
// 从pinia中导入函数
import { useCounterStore } from '@/stores/category.js'  
const categoryStore = useCounterStore();

</script>

<template>
  <header class='app-header'>
    <div class="container">
      <h1 class="logo">
        <RouterLink to="/">小兔鲜</RouterLink>
      </h1>
        <ul class="daohang">
          <li class="home">
             <RouterLink to="/">首页</RouterLink>
          </li>
            <li v-for="item in categoryStore.categoryList" :key="item.id">
                <!-- li里面放了a标签 a标签等同于 RouterLink -->
                <RouterLink active-class="active" :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
            </li>
        </ul>
      <div class="search">
        <i class="iconfont icon-search"></i>
        <input type="text" placeholder="搜一搜">
      </div>
      <!-- 头部购物车 -->

    </div>
</header>
</template>


<style scoped lang='scss'>
.app-header {
  background: #fff;

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;

    a {
      display: block;
      height: 132px;
      width: 100%;
      text-indent: -9999px;
      background: url('@/assets/images/logo.png') no-repeat center 18px / contain;
    }
  }

    // 导航部分
  .daohang {
    display: flex;
    justify-content: space-between;
    margin-left: 20px;

    li {
        margin: 0 15px;
    }
  }


  .search {
    width: 170px;
    height: 32px;
    position: relative;
    border-bottom: 1px solid #e7e7e7;
    line-height: 32px;

    .icon-search {
      font-size: 18px;
      margin-left: 5px;
    }

    input {
      width: 140px;
      padding-left: 5px;
      color: #666;
    }
  }

  .cart {
    width: 50px;

    .curr {
      height: 32px;
      line-height: 32px;
      text-align: center;
      position: relative;
      display: block;

      .icon-cart {
        font-size: 22px;
      }

      em {
        font-style: normal;
        position: absolute;
        right: 0;
        top: 0;
        padding: 1px 6px;
        line-height: 1;
        background: $helpColor;
        color: #fff;
        font-size: 12px;
        border-radius: 10px;
        font-family: Arial;
      }
    }
  }

  .active {
    color: $xtxColor;
    border-bottom: 1px solid $xtxColor;
  }
}
</style>