<template>
    <div>
      <p>{{ $route.params.name }}</p>
      <p>arguName: {{arguNameGetter}}</p>
      <button @click="SET_ARGU_NAME('真帅')">改变arguName</button>
    </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from 'vuex'
export default {
  name: 'argu',
  props: {
    name: {
      type: String,
      default: 'sun'
    }
  },
  computed: {
    ...mapState([
      'arguName'
    ]),
    ...mapGetters([
      'arguNameGetter'
    ])
  },
  methods: {
    ...mapActions([
    //
    ]),
    ...mapMutations([
      'SET_ARGU_NAME'
    ])
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
