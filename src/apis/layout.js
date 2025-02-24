// 封装接口函数
// httpInstance 是配置好基地址和拦截器的axios
import httpInstance from "@/utils/http";

export function getCategoryAPI() {
    return httpInstance({
        // 默认是get请求，可以省略
        url: '/home/category/head'
    })
}
