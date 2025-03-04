import { getCategoryAPI } from "@/apis/category";
import { ref, onMounted } from "vue";
// useRoute 可以获取地址栏上的数据
import { useRoute } from "vue-router";

export function userCategory() {
  // 获取数据
  const categoryData = ref({});
  // const route = useRoute()

  // 封装函数
  //  创建页面时 会调用一次无参的函数
  const getCategory = async (id = useRoute().params.id) => {
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => {
    getCategory();
  });

  // 将要使用的数据以对象的形式return
  // 注意：这里返回的是一个对象
  return {
    categoryData,
    // 还需要导出一个函数
    getCategory
  };
}
