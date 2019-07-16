<template>
  <div class="split-pane-wrapper" ref="wrapper">
    <div class="pane pane-left" :style="{width:leftOffset,paddingRight: `${this.triggerWidth/2}px`}">
      <slot name="left"></slot>
    </div>
    <div class="pane-trigger" @mousedown="handleMousedown" :style="{width: correctTriggerWidth,left:correctTriggerLeft}"></div>
    <div class="pane pane-right" :style="{left:leftOffset,paddingLeft: `${this.triggerWidth/2}px`}">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'split-pane',
  data () {
    return {
      initOffset: 0
    }
  },
  props: {
    value: {
      type: Number,
      default: 0.5
    },
    triggerWidth: {
      type: Number,
      default: 6
    },
    min: {
      type: Number,
      default: 0.2
    },
    max: {
      type: Number,
      default: 0.8
    }
  },
  computed: {
    leftOffset () {
      return `${this.value * 100}%`
    },
    correctTriggerWidth () {
      return `${this.triggerWidth}px`
    },
    correctTriggerLeft () {
      return `calc(${this.leftOffset} - ${this.triggerWidth / 2}px)`
    }
  },
  methods: {
    handleMousedown (event) {
      this.initOffset = event.offsetX
      console.log(this.initOffset)
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
    },
    handleMousemove (event) {
      var client = this.$refs.wrapper.getBoundingClientRect()
      var offset = (event.pageX - client.left - this.initOffset + this.triggerWidth / 2) / client.width
      if (offset <= this.min) offset = this.min
      if (offset >= this.max) offset = this.max
      this.$emit('update:value', offset)
    },
    handleMouseup (event) {
      document.removeEventListener('mousemove', this.handleMousemove)
      document.removeEventListener('mouseup', this.handleMouseup)
    }
  }
}
</script>

<style scoped>
.split-pane-wrapper{
  width: 100%;
  height: 100%;
  position: relative;
}
.pane{
  height: 100%;
  position: absolute;
}
.pane-left{
  background-color: aqua;
}
.pane-right{
  top:0;
  right:0;
  bottom: 0;
  background-color: palegoldenrod;
}
.pane-trigger{
  background:red;
  position: absolute;
  height: 100%;
  z-index: 9;
  user-select: none;  /*防止拖动和选择网页元素*/
  cursor: col-resize;
}
</style>
