// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// 引入初始化样式文件
import '@/styles/common.scss'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 在main.js中导入js文件，导入即执行
// import '@/apis/ceshi.js'

// 测试接口函数
// import { getCategory } from './apis/testAPI'
// getCategory().then(res => {
//     console.log(res)
// })

const app = createApp(App)

// 引入懒加载指令插件并且注册
// lazyPlugin是一个对象
import { lazyPlugin } from '@/directives/index'

// 引入全局组件插件
import { componentPlugin } from '@/components'

// 注册持久化插件
const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use()
app.use(router)
app.use(lazyPlugin)
app.use(componentPlugin)

app.mount('#app')
