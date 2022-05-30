<template>
  <div class="my-product">
    <h3>标题：{{ proname }}</h3>
    <p>价格： {{ proprice }} </p>
    <p>{{ info }}</p>
    <button @click="cut">砍一刀</button>
  </div>
</template>

<script>
export default {
  // props接收父组件传递过来的数据
  props: ['proname', 'proprice', 'info', 'proId'],
  methods: {
    cut(){
      // this.proprice -=1 这是在直接修改父组件的数据 违反了单向数据流
      // 解决方案 子传父
      // 1. 子组件发布自定义事件 this.$emit('自定义事件名', 参数1, 参数2,...)
      this.$emit('cutPrice', this.proId, 1)
      // 2. 父组件做自定义事件绑定 @自定义事件名= 处理函数
    }
  }
}
</script>

<style lang="less" scoped>
.my-product {
  padding: 20px;
  border: 3px solid #000;
  border-radius: 10px;
  width: 400px;
  margin: 10px;
}
</style>