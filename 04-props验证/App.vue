<template>
  <div>
    <Son a="10" b="20" :age="age" :msg="msg"></Son>
  </div>
</template>

<script>
import Son from './components/Son.vue'

export default {
  components: { Son },
  data(){
    return {
      msg: 'true',
      age: 2
    }
  }

}
</script>

<style>

</style>