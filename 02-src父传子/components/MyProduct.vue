<template>
  <div class="my-product">
    <h3>标题：{{ title }}</h3>
    <p>价格：{{ price }}</p>
    <p>{{ info }}</p>
  </div>
</template>

<script>
export default {
  // props接收父组件传递过来的数据,
  // props接收的数据可以直接在模板结构中使用
  props: ['title', 'price', 'info']
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