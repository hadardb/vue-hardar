<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <transition-group name="routeTrans">
      <router-view key="default"/>
      <router-view key="email" name="email"></router-view>
      <router-view key="tel" name="tel"></router-view>
    </transition-group>
  </div>
</template>

<style lang="less">
  .routeTrans-enter{
    opacity: 0;
  }
  .routeTrans-enter-active{
    transition: opacity 1s ease;
  }
  .routeTrans-to{
    opacity: 1;
  }
  .routeTrans-leave{
    opacity: 1;
  }
  .routeTrans-enter-active{
    transition: opacity 1s ease;
  }
  .routeTrans-to{
    opacity: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
