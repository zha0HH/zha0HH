<template>
  <footer class="footer">
      <!-- This should be `0 items left` by default -->
      <span class="todo-count"><strong>{{ unCompleteCount }}</strong> item left</span>
      <!-- Remove this if you don't implement routing -->
      <ul class="filters">
        <li>
          <a 
           :class="{ selected: type === 'all' }" 
           href="#/"
           @click="toggle('all')">All</a>
        </li>
        <li>
          <a 
          :class="{ selected: type === 'active' }" 
          href="#/active" 
          @click="toggle('active')"
          >Active</a>
        </li>
        <li>
          <a 
          :class="{ selected: type === 'completed' }" 
          href="#/completed" 
          @click="toggle('completed')"
          >Completed</a>
        </li>
      </ul>
      <!-- Hidden if no completed items are left ↓ -->
      <button class="clear-completed" v-show="isShowClear" @click="clearIsDone">Clear completed</button>
    </footer>
</template>

<script>
export default {
  // 接收父组件传递的数据
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  data(){
    return {
      type: 'all'
    }
  },
  computed: {
    // 剩余任务数量
    unCompleteCount(){
      // 统计list中每一项的isDone为false的任务项
      return this.list.filter(item => item.isDone === false).length
    },
    // 控制清除已完成按钮的显示与隐藏的计算属性
    isShowClear(){
      // 只要有一项的isDone为true 就显示
      return this.list.some(item => item.isDone === true)
    }
  },
  methods: {
    // 清除已完成
    clearIsDone(){
      // 通知父组件清除已完成的任务
      this.$emit('clear')
    },
    // 切换面板
    toggle(str){
      // console.log(str)
      this.type = str
      // 通知父组件切换数据的面板展示
      this.$emit('toggleList', str)
    }
  }
}
</script>

<style>

</style>