import  httpInstance  from '@/utils/http'

// 获取轮播图
export function getBannerAPI() {
    // 返回httpInstance 函数调用的结果
    return httpInstance({
        url: '/home/banner'
    })
}

/**
 * 获取新鲜好物
 */

export const findNewAPI = ()=> {
    return httpInstance({
        url: '/home/new'
    })
}

/**
 * 获取人气推荐
 */

export const getHotAPI = () => {
    return httpInstance({
        url: '/home/hot'
    })
}

/**
 * 获取所有商品模块
 */
export const getGoodsAPI = () => {
    return httpInstance({
        url: '/home/goods'
    })
}