<template>
    <div>
      email:123214@qq.com
      <button @click="handlerClick"> 点我</button>
      <p>userName:{{userName}}</p>
      <p>appName:{{appName}}</p>
    </div>
</template>

<script>
export default {
  name: 'email',
  data () {
    return {
      userName: this.$store.state.user.userName,
      appName: this.$store.state.appName
    }
  },
  methods: {
    handlerClick: function () {
      this.$bus.$emit('emitClick', 'hello')
    }
  }
}
</script>

<style scoped>

</style>
