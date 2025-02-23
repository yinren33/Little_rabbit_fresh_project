import httpInstance from "@/utils/http";

// 这里到处了一个函数
export function getCategory() {
    return httpInstance({
        // 暂时理解为 这里的url会和基地址进行拼接
        url: 'home/category/head'
    })
}