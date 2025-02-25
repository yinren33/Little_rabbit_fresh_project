// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
    install (app) {
        // 定义全局指令
        app.directive('img-lazy', {
            mounted (el, binding) {
                // el：指令绑定的哪个元素
                // binding: binding.value 指令的= 等于号后面绑定的表达式的值 图片的网络URL
                // 先打印标签，再打印等于号后面的值
                console.log(el, binding.value)
                const { stop } = useIntersectionObserver(
                    el,
                    ([{isIntersecting}]) => {
                        console.log(isIntersecting)
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    }
                )
            }
        })
    }
}