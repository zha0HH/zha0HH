<template>
  <div class="header">
    header-网页头部 -- {{ money }}
    <HmButton></HmButton>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 组件内部设置的样式默认会作用到全局, 想样式只作用于当前组件 添加scoped属性限制 */
.header {
  border: 3px solid #000;
  padding: 10px;
}
div {
  background-color: red;
}
</style>