<template>
  <div class="content">
    <MyProduct :title="title" :price="price" :info="info"></MyProduct>
    <MyProduct :title="title" :price="price" :info="info"></MyProduct>
    <MyProduct :title="title" :price="price" :info="info"></MyProduct>
  </div>
</template>

<script>
// 组件的数据都是独立的, 父 传 子
// 1. 在使用子组件的位置 进行属性传递
// 2. 在子组件内部通过props接收传递的属性
// 注意点 属性传递绑定的时候  :自定义属性名="值"  接收 自定义属性名
import MyProduct from './components/MyProduct.vue'
export default {
  data() {
    return {
      title: '香辣鸡腿堡',
      price: '20元',
      info: '买一送一'
    }
  },      
  // 局部注册
  components: {
    MyProduct
  }
}
</script>

<style>

</style>