<template>
   <header class="header">
      <h1>todos</h1>
      <input 
      class="new-todo" 
      placeholder="What needs to be done?" 
      autofocus
      v-model="name"
      @keydown.enter="addTodo"
      />
    </header>
</template>

<script>
export default {
  data(){
    return {
      name: ''
    }
  },
  methods: {
    addTodo(){
      // 0. 非空校验
      if(this.name.trim().length === 0) return alert('请输入要新增的任务')
      // 1. 通知父组件并且携带name
      this.$emit('add', this.name)
      // 2. 清空输入框值
      this.name = ''
    }
  }
}
</script>

<style>

</style>