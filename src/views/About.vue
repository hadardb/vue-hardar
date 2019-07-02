<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{fruit}}</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  props: {
    fruit: {
      type: String,
      default: 'apple'
    }
  }
}
</script>
