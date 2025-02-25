// 下面导入了两个函数
// createRouter 创建router实例对象
// createWebHistory 创建history模式的路由
import { createRouter, createWebHistory } from "vue-router";

// 导入一级组件
import Login from "@/views/Login/index.vue";
import Layout from "@/views/Layout/index.vue";

// 导入二级组件
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 在下面的数组中，主要配置path和component的对应关系 也就是路径和组件
  routes: [
    {
      // 这里理解为进入首页时 先加载Layout组件中的数据页面，然后加载Home组件中的页面
      // 进入网站时，默认路径是/
      path: "/",
      component: Layout,
      children: [
        // 进入网站时 不仅会渲染一级路由的组件还有渲染二级路由的组件，因为路由入口被设置
        {
          path: "",
          component: Home
        },
        {
          // 路径中的path名是在浏览器的url地址栏要访问的地址，和vue组件名字不一样
          path: "category/:id",
          component: Category
        }
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
