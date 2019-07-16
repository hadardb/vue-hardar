<template>
  <div>
    <slot name="left"></slot>
    <span :class="sountClass" ref="num" :id="eleId"></span>
    <slot name="right"></slot>
  </div>
</template>

<script>
import CountUp from 'countup'
export default {
  name: 'count-to',
  data () {
    return {
      count: {},
      sountClass: [
        'count-to-number',
        this.className
      ]
    }
  },
  methods: {
    getNum () {
      return this.$refs.num.innerText
    },
    datahandel () {
      setTimeout(() => {
        this.$emit('count-to-data', Number(this.getNum()))
      }, this.duration * 1000 + 5)
    }
  },
  computed: {
    eleId () {
      return `count_to_${this._uid}`
    }
  },
  watch: {
    endVal (newVal, oldVal) {
      this.count.update(newVal)
      this.datahandel()
    }
  },
  props: {
    className: {
      type: String,
      default: ''
    },
    /*
    *   @description  起始时间
    * */
    startVal: {
      type: Number,
      default: 0
    },
    /*
    *   @description  结束时间
    * */
    endVal: {
      type: Number,
      required: true
    },
    /*
    *   @descriptopn  小数位数
    * */
    decimalPlaces: {
      type: Number,
      default: 0
    },
    /*
    *   @description  动画持续时间
    * */
    duration: {
      type: Number,
      default: 1
    },
    /*
    *   @description  是否每三位数用符号间隔
    * */
    useGrouping: {
      type: Boolean,
      default: true
    },
    /*
    *   @description  动画是否变速
    * */
    useEasing: {
      type: Boolean,
      default: false
    },
    /*
    *   @description  三个字符间的间隔符号
    * */
    separator: {
      type: String,
      default: ','
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.count = new CountUp(this.eleId, this.startVal, this.endVal, this.decimalPlaces, this.duration, {
        useGrouping: this.useGrouping,
        useEasing: this.useEasing,
        separator: this.separator
      })
      this.count.start()
      this.datahandel()
    })
  }
}
</script>

<style scoped>
.count-to-number{
  color: red;
}
</style>
