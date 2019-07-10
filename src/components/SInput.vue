<template>
 <input @input="handleInput" >
</template>

<script>
export default {
  name: 'SInput',
  porps: {
    value: {
      type: [String, Number],
      default: ''
    }
  },
  methods: {
    handleInput (event) {
      const value = event.target.value
      this.$emit('input', value)
    }
  }
}
</script>

<style scoped>

</style>
