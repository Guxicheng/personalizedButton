// luButton 插件对应组件的名字
import luButton from './lu-button';

luButton.install = Vue => Vue.component(luButton.name, luButton); //注册组件
　 // 标签的方式引入，留到后面再另开新篇讨论
//const install = function(Vue, opts = {}) {
　 //　　Vue.component(sumFunction.name, sumFunction);
　 //}
/* 支持使用标签的方式引入 Vue是全局变量时，自动install */
//if (typeof window !== 'undefined' && window.Vue) {
//  install(window.Vue);
//}

export default luButton;