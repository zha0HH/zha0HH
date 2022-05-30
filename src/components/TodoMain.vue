<template>
  <section class="main">
      <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isCheckAll" />
      <label for="toggle-all">Mark all as complete</label>
      <ul class="todo-list">
        <!-- These are here just to show the structure of the list items -->
        <!-- List items should get the class `editing` when editing and `completed` when marked as completed -->
        <li :class="{completed: item.isDone}" v-for="item in list" :key="item.id">
          <div class="view">
            <!-- v-model 绑定 会直接双向同步给父组件 违反单向数据流 -->
            <input class="toggle" type="checkbox" :checked="item.isDone" @change="changeState(item.id)" />
            <label>{{ item.name }}</label>
            <button class="destroy" @click="delTodo(item.id)"></button>
          </div>
          <input class="edit" value="Create a TodoMVC template" />
        </li>
      </ul>
    </section>
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
  methods: {
    // 删除
    delTodo(id){
      // console.log(id)
      // 通知父组件 并携带id
      this.$emit('del', id)
    },
    // 修改状态
    changeState(id) {
      // 通知父组件 并携带id
      this.$emit('changeState', id)
    }
  },
  computed: {
    isCheckAll:{
      get(){
        return this.list.every(item => item.isDone === true)
      },
      set(val){
        console.log(val)
        // 通知父组件, 让父组件更新所有列表的isDone
        this.$emit('changeAll', val)
      }
    }
  }
}
</script>

<style>

</style>