<template>
  <div>
    <!--v-model 等于 :value + @input事件 每次在input中修改value 完成双向绑定-->
    <!--<s-input :value="inputValue" @input="setStateInputValue"></s-input>-->
    <s-input v-model="inputValue"></s-input>
    {{inputValue}}=>last letter {{inputValueLastLetter}}
    <p>{{appName}}</p>
    <p>userName: {{userName}}</p>
    <p>appNameWidthVersion: {{appNameWidthVersion}}</p>
    <p>fastLetter: {{fastLetter}}</p>
    <button @click="handlerAppNameChange">改变appName</button>
    <p>appVersion: {{appVersion}}</p>
    <button @click="handlerUserName">改变userName</button>
  </div>
</template>

<script>
import SInput from '_c/SInput.vue'
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'store',
  mounted () {
    // console.log(...mapState('appName'))
  },
  computed: {
    // ...mapState([
    //   'appName'
    // ])
    ...mapState({
      appName: state => state.appName,
      appVersion: state => state.appVersion,
      userName: state => state.user.userName
      // inputValue: state => state.inputStateValue
    }),
    // ...mapState('user', { // 声明模块名调用，如果没有模块名则都可以通过全局调用
    //   userName: state => state.user.userName
    // }),
    ...mapGetters([
      'appNameWidthVersion',
      'fastLetter'
    ]),
    inputValue: {
      get () {
        return this.$store.state.inputStateValue
      },
      set (val) {
        this.SET_INPUT_VALUE(val)
      }
    },
    inputValueLastLetter: function () {
      return this.inputValue.substr(-1, 1)
    }
  },
  methods: {
    ...mapMutations([
      'SET_APPNAME',
      'SET_APP_VERSION',
      'SET_USER_NAME',
      'SET_INPUT_VALUE'
    ]),
    ...mapActions([
      'updateAppName'
    ]),
    handlerAppNameChange: function () {
      this.updateAppName()
      // 也可以使用 dispatch 方法 调用 actions
      // this.$store.dispatch('updateAppName','123')
      // this.SET_APPNAME('newAppName')
      this.SET_APP_VERSION('v1.2.0')
      // this.$store.commit('SET_APPNAME', 'newAppName')
      // this.$store.commit('SET_APP_VERSION', 'v1.2.0')
    },
    handlerUserName: function () {
      this.SET_USER_NAME('孙耗尽')
    }
    // setStateInputValue: function (val) {
    //   this.SET_INPUT_VALUE(val)
    // }
  },
  components: {
    SInput
  }
}
</script>

<style scoped>

</style>
