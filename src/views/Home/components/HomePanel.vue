<script setup>
// 使用上级组件传递过来的数据，接收数据并将数据渲染到页面中
defineProps({
    // 主标题
    title: {
        type: String
    },
    // 副标题
    subTitle: {
        type: String
    }
})
</script>



<template>
<!-- 为了实现组件的复用 先建立静态页面-->
  <div class="home-panel">
    <div class="container">
      <div class="head">
        <!-- 主标题和副标题 -->
        <h3>
          {{ title }}<small>{{ subTitle }}</small>
        </h3>
      </div>
      <!-- 主体内容区域 -->
        <slot></slot>
    </div>
  </div>
</template>

<style scoped lang='scss'>
.home-panel {
  background-color: #fff;

  .head {
    padding: 40px 0;
    display: flex;
    align-items: flex-end;

    h3 {
      flex: 1;
      font-size: 32px;
      font-weight: normal;
      margin-left: 6px;
      height: 35px;
      line-height: 35px;

      small {
        font-size: 16px;
        color: #999;
        margin-left: 20px;
      }
    }
  }
}
</style>