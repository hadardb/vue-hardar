<template>
    <div>
      {{ $route.params.name }}
    </div>
</template>

<script>
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'sun'
    }
  },
  // 组件是复用组件，值变化时调用
  beforeRouteUpdate (to, from, next) {
    console.log(to.name, from.name)
    next()
  }
}
</script>

<style scoped>

</style>
