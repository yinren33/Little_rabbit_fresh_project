<script setup>
// import LayoutHeaderUl from './LayoutHeaderUl.vue'
// vueUse
import { useScroll } from "@vueuse/core";
import { getCategoryAPI } from "@/apis/layout";
import { onMounted, ref } from "vue";
// 使用pinia中的数据
import { useCounterStore } from '@/stores/category.js'

// 调用pinia中导入的useCounterStore方法会返回一个对象，该对象中的数组已经被复制 在layout中的index.vue中
const categoryStore = useCounterStore()

const { y } = useScroll(window);

</script>

<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container">
      <RouterLink class="logo" to="/" />
      <!-- 导航区域 -->

      <!-- <LayoutHeaderUl /> -->
      <div class="right">
        <ul>
          <li v-for="item in categoryStore.categoryList" :key="item.id">
            <RouterLink :to="`/category/${item.id}`">{{ item.name }}</RouterLink>
          </li>
        </ul>
        <RouterLink to="/">品牌</RouterLink>
        <RouterLink to="/">专题</RouterLink>
      </div>
    </div>
  </div>
</template>


<style scoped lang='scss'>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
  // 此处为关键样式!!!
  // 状态一：往上平移自身高度 + 完全透明
  transform: translateY(-100%);
  opacity: 0;

  // 状态二：移除平移 + 完全不透明
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }

  .logo {
    width: 200px;
    height: 80px;
    background: url("@/assets/images/logo.png") no-repeat right 2px;
    background-size: 160px auto;
  }

  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid $xtxColor;

    ul {
        display: flex;

        li {
            margin: 0 15px;

            &:hover {
                background-color: pink;
            }
        }
    }

    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;

      &:hover {
        color: $xtxColor;
      }
    }
  }
}
</style>