<template>
  <div id="app">
    <app-menu/>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>


<script>
// @ is an alias to /src
import AppMenu from '@/components/menu.vue';

export default {
  components: { AppMenu }
}
</script>


<style lang="sass">
body
  margin: 0
  padding: 0

#app
  font-family: "Avenir", Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  display: flex
  flex-direction: row
  flex-wrap: no-wrap

.content
  width: calc(100% - 320px)
</style>
