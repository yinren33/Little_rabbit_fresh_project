import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCategoryAPI } from '@/apis/layout'

// useCounterStore是一个函数，这个函数返回一个对象
export const useCounterStore = defineStore('category', function() {
    // 对两次重复的请求进行优化
    const categoryList = ref([])

    // 获取导航数据的方法
    const getCategory = async function() {
        const res = await getCategoryAPI()
        categoryList.value = res.result
    }

    // 以对象的方式进行导出
    return {
        categoryList,
        getCategory
    }

})
