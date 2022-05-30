<template>
  <div class="content">
    <!-- 2. 父组件做自定义事件绑定 @自定义事件名= 处理函数 -->
    <MyProduct 
     v-for="item in list" 
    :key="item.id"
    :proname="item.proname"
    :proprice="item.proprice"
    :info="item.info"
    :proId="item.id"
    @cutPrice="handleCut"
    ></MyProduct>
  </div>
</template>

<script>
import MyProduct from './components/MyProduct.vue'
export default {
  data() {
    return {
      list: [
        { id: 1, proname: '超级好吃的棒棒糖', proprice: 18.8, info: '全场5折' },
        { id: 2, proname: '超级好吃的大鸡腿', proprice: 34.2, info: '买一赠一' },
        { id: 3, proname: '超级无敌的冰激凌', proprice: 14.2, info: '白送' }
      ],
      count: 100
    }
  },      
  // 局部注册
  components: {
    MyProduct
  },
  methods: {
    handleCut(id, num){
      // console.log(id, num)
      // 拿着id找对应的商品 砍价
     const pro = this.list.find(item => item.id === id)
     //  console.log(pro)
     pro.proprice -= num
    }
  }
}
</script>

<style>

</style>