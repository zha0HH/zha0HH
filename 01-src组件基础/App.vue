<template>
  <div>
  <!--  注册组件的注意点
  1. 注册组件的时候 components节点中的名字 可以任意命名, 不能命名成html标签
  2. 组件在使用的时候必须先注册,再使用
  3. 组件名注册有两种方式
     - 注册组件的时候可以使用短横线连接  hm-header  hm-main hm-footer
     - 注册组件可以使用大驼峰命名  HmHeader 使用组件的时候 hm-header HmHeader
   -->
    <!-- 网页头部 -->
    <!-- 4. 使用组件 -->
    <HmHeader></HmHeader>
    <hm-header></hm-header>
    <!-- 网页主体 -->
    <HmMain></HmMain>
    <!-- 网页底部 -->
    <HmFooter></HmFooter>
    <!-- <HmAside></HmAside> -->
    <HmButton></HmButton>
    <hr>
    <GoodsPage></GoodsPage>
  </div>
</template>

<script>

// 1. 创建组件
// 2. 引入组件 语法: import 组件变量名 from '组件的路径'
import HmHeader from './components/HmHeader'
import HmMain from './components/HmMain.vue'
import HmFooter from './components/HmFooter.vue'
export default {
  // 3. 注册组件 
  components: {
    // 组件名: 组件
    HmHeader: HmHeader,
    // 'hm-header': HmHeader,
    // HmMain: HmMain
    HmMain,
    HmFooter,
  },
  data(){
    return {
      money: 100
    }
  }
}
</script>

<style>

</style>