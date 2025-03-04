// 配置请求URL的基地址
import axios from 'axios'
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'

const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000,
})

// 配置请求拦截器
httpInstance.interceptors.request.use(function(config){
    return config
}, e =>Promise.reject(e))

// 配置响应拦截器
httpInstance.interceptors.response.use(function(res) {
    return res.data
}, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })
    return Promise.reject(e)
})

export default httpInstance