<template>
  <div>
    <countTo :endVal=endVal ref="count" @count-to-data="countHandle" :className="className">
      <span slot="left">总金额：</span>
      <span slot="right">元</span>
    </countTo>
    <button @click="showDate">输出金额</button>
    <button @click="upNumber">改变金额</button>
  </div>
</template>

<script>
import countTo from '@/components/count-to'
export default {
  name: 'count-to',
  data () {
    return {
      endVal: 680,
      className: 'countClass' + this._uid
    }
  },
  components: {
    countTo
  },
  methods: {
    upNumber () {
      this.endVal += Math.random() * 100
    },
    showDate () {
      console.log(this.$refs.count.getNum())
    },
    countHandle (data) {
      console.log(data)
    }
  }
}
</script>

<style scoped>

</style>
