

<template>
  <div id="nav" class="menu">
    <div class="menu__header">
      <div class="menu__logo" @click="href='/home'">
        <img width="100%" src="/img/marvel-logo.png" id="menu_logo"/>
      </div>
    </div>
    <div class="menu__main">
      <router-link class="menu__link" exact to="/">Home</router-link>
      <router-link class="menu__link" exact to="/about">About</router-link>
      <router-link class="menu__link" exact to="/heroes">Heróis</router-link>
    </div>
      <router-link class="menu__link" exact to="/superpower">Super Poderes</router-link>
    <div class="menu__footer">
      2019 &copy; Todos os direitos reservados
    </div>
  </div>
</template>

<script>
export default {
  name: 'menu',
};
</script>

<style lang="sass" scoped>
.menu
  background: #212121
  width: 320px
  height: 100vh
  overflow: auto
  position: relative
  color: #fff
  &__home
    display: flex
    flex-direction: row
  &__link
    display: block
    text-decoration: none
    color: #fff
    padding: 10px
    text-align: left
    &.router-link-active
      background: #f44336
  &__footer
    position: absolute
    left: 0
    bottom: 16px
    right: 0
    font-size: 9px
    text-align: center
</style>
