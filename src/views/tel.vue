<template>
    <div>
      tel:123124213
      <p>{{myValue}}</p>
    </div>
</template>

<script>
export default {
  name: 'tel',
  data () {
    return {
      myValue: ''
    }
  },
  mounted () {
    this.$bus.$on('emitClick', (val) => {
      this.myValue = val
    })
  }
}
</script>

<style scoped>

</style>
