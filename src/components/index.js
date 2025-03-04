// 将常用的公共组件全局注册
import { install } from 'element-plus'
import ImageView from './ImageView/index.vue'
import Sku from './XtxSku/index.vue'


// 注册为全局组件之后，就不需要再导入了
export const componentPlugin = {
    install(app) 
    {
        // app.component('组件名字', 组件配置对象)
        app.component('XtxImageView', ImageView)
        app.component('XtxSku', Sku)
    }
}