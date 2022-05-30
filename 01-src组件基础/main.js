import Vue from 'vue'
import App from './App.vue'
// 在main.js中注册全局组件
// 1. 导入
import HmButton from './components/HmButton.vue'
import HmGoods from './components/HmGoods'
// 2. 注册 Vue.component('组件名', 组件)
Vue.component('HmButton', HmButton)
// Vue.component('HmGoods', HmGoods)
Vue.component(HmGoods.name, HmGoods)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
