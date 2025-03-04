// 注意：全局导出，所以取什么名字都行
import request from "@/utils/http";

export function getCategoryAPI(id) {
    return request({
        url: '/category',
        params: {
            id
        }
    })
}

// 通过获取地址栏的商品id发出请求，得到当前所在位置的名字
export const getCategoryFilterAPI = (id) => {
    return request({
        url: '/category/sub/filter',
        params: {
            id
        }
    })
}

/**
 * 获取导航数据
 */
export const getSubCategoryAPI = (data) => {
    return request({
        url: '/category/goods/temporary',
        method: 'POST',
        data
    })
}
