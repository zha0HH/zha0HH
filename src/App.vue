<template>
  <section class="todoapp">
    <!-- 头部 -->
    <TodoHeader @add="add"></TodoHeader>
    <!-- 主体 -->
    <TodoMain 
    :list="showList" 
    @del="delTodo"
    @changeState="changeState"
    @changeAll="changeAll"
    ></TodoMain>
    <!-- 底部 -->
    <TodoFooter 
    :list="list" 
    @clear="clear" 
    v-if="list.length"
    @toggleList="toggleList"
    ></TodoFooter>
  </section>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
import TodoFooter from './components/TodoFooter.vue'
export default {
  // 挂载子组件
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter
  },
  data() {
    return {
      // list: [
      //   { id: 1, name: '吃饭', isDone: false },
      //   { id: 2, name: '写代码', isDone: true },
      //   { id: 3, name: '睡觉', isDone: false },
      //   { id: 4, name: '洗澡', isDone: false }
      // ],
      // 优先从本地存储获取数据
      list: JSON.parse(localStorage.getItem('todoList')) || [],
      type: 'all'
    }
  },
  computed: {
    showList(){
      // 基于传递过来的type类型 选择返回不同的数组
      if(this.type === 'all') {
        return this.list
      }else if(this.type === 'active') {
        return this.list.filter(item => item.isDone === false)
      }else {
        return this.list.filter(item => item.isDone === true)
      }
    }
  },
  watch: {
    list:{
      deep: true, // 开启深度监听
      handler(newVal){
        // console.log('侦听list变化')
        // 将最新的list状态存储到本地
        localStorage.setItem('todoList', JSON.stringify(newVal))
      }
    }
  },
  methods: {
    delTodo(id) {
      // console.log(id)
     // 留下非删除的数据
     this.list = this.list.filter(item => item.id !== id)
    },
    // 修改任务状态
    changeState(id) {
      // console.log(id)
      // 1.拿着id找到对应的任务项
      const obj = this.list.find(item => item.id === id)
      // 2. 修改状态 isDone
      obj.isDone = !obj.isDone
    },
    // 新增任务
    add(name){
      console.log(name)
      // 拼接一个对象 push数组中
      this.list.push({
        id: +new Date(),
        name,
        isDone: false
      })
    },
    // 清除已完成
    clear(){
      // 将isDone为false留下
      this.list = this.list.filter(item => item.isDone === false)
    },
    // 切换面板
    toggleList(type){
      console.log(type)
      this.type = type
      // 不能在此处直接过滤list
      // if(type === 'active') {
      //  this.list = this.list.filter(item => item.isDone === false)
      // }
    },
    // 切换全选反选
    changeAll(val){
      // 将全选框按钮的状态同步给所有的列表
      this.list.forEach(item => {
        item.isDone = val
      })
    }
  }
}
</script>

<style>
</style>
