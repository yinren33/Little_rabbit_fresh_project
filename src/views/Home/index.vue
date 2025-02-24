<template>
    <div>
        我是二级路由里的home页
        <RouterLink to="/login">点我跳转</RouterLink>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
    div {
        background-color: skyblue;
        height: 100px;

        RouterLink {
            display: block;
            width: 200px;
            height: 100px;
            background-color: skyblue;
        }
    }
</style>