// 获取banner
import { getBannerAPI } from "@/apis/home.js";
import { ref, onMounted } from 'vue'

export function useBanner() {
  const bannerList = ref([]);

  // 封装函数
  const getBanner = async function () {
    const res = await getBannerAPI({
      distributionSite: "2",
    });
    bannerList.value = res.result;
  };

  // 调用函数
  onMounted(() => {
    getBanner();
  });

  // 返回组件中可能会用到的函数
  return {
    bannerList
  }
}
