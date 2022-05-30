<template>
  <div>
    son子组件 -- {{ msg }}
  </div>
</template>

<script>
export default {
  // props: ['msg'] // 数组的方式接收数据是不会有类型校验的
  // 需要有类型校验 需要将props设置为对象
  props: {
    // --- 1. 接收的数据是msg 要求数据类型是字符串 指定一个类型
    msg: String,
    // --- 2. 接收的数据是msg  指定多个类型
    // msg: [String, Number, Boolean] 
    // --- 3.对象方式 type是类型 required 必填项传递
    // msg: {
    //   type: [String, Number, Boolean],
    //   required: true // 必填项传递
    // }
    // ----4. default: 默认值 和 required 是互斥的, 
    // 基本数据类型可以直接写, 复杂数据类型要求使用函数返回一个默认值(工厂函数)
    // msg: {
    //   type: Object,
    //   default: () => {
    //     return {}
    //   }
    // }
    // 接收的age 必须是数字 age >=18  <=30
    // ------5. 自定义验证函数
    age: {
      type: Number,
      validator: (value) => {
        // validator 函数返回true就是校验通过,返回false就是校验失败
        if(value >= 18 && value <= 30) {
          return true
        }else {
          return false
        }
        // console.log(value);
      }
    }
  }
}
</script>

<style>

</style>