<template>
  <div class="home">
    <b>{{ fruit }}</b>
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="handleClick('back')">返回</button>
    <button @click="handleClick('parent')">跳转parent</button>
    <button @click="handleClick('argu')">替换至argu</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  props: {
    fruit: {
      type: String,
      default: 'apple'
    }
  },
  // 在页面进入时调用
  beforeRouteEnter (to, from, next) {
    // this 无法使用，因为当前页面还没有渲染好
    next(vm => {
      console.log(vm)
    })
  },
  // 在页面离开时调用
  beforeRouteLeave (to, from, next) {
    const leave = confirm('您确定要离开吗？')
    if(leave) next()
    else next(false)
  },
  methods: {
    handleClick (type) {
      if (type === 'back') this.$router.back()
      // 跳转
      else if (type === 'parent') {
        this.$router.push({
          name: 'parent'
        })
      } else if (type === 'argu') {
        this.$router.replace({
          name: 'argu',
          params: {
            name: 'Lison'
          }
          // query: {
          //   name: 'Lison'
          // }    后边带参数 ?name=Lison
        })
        // 替换路由 无法返回至之前页
      }
    }
  }
}
</script>
