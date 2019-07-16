<template>
  <div class="split-pane-con" >
    <splitPane :value.sync="val">
      <div slot="left">
        left
      </div>
      <div slot="right">
        right
      </div>
    </splitPane>
  </div>
</template>

<script>
import splitPane from '@/components/split-pane'
export default {
  name: 'split-pane',
  data () {
    return {
      val: 0.3
    }
  },
  components: {
    splitPane
  },
  methods: {

  }
}
</script>

<style scoped>
.split-pane-con{
  width: 400px;
  height: 200px;
  background: palegoldenrod;
}
</style>
