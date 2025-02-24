import  httpInstance  from '@/utils/http'

// 获取轮播图
export function getBannerAPI() {
    // 返回httpInstance 函数调用的结果
    return httpInstance({
        url: '/home/banner'
    })
}