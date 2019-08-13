<template>
  <div id="nav" class="menu">
    <div class="menu__header">
      <div class="menu__logo">
        <img src="../../static/imgs/marvel-logo.png" id="menu_logo" />
      </div>
    </div>
    <div class="menu__main">
      <router-link to="/">
        <div> HOME </div>
      </router-link>
      <router-link to="/about">About</router-link>
      <router-link to="/heroes">Heróis</router-link>
      <router-link to="/superpower">Super Poderes</router-link>
    </div>
    <div class="menu__footer"></div>
  </div>
</template>


<script>
export default {
  name: 'menu',
};
</script>


<style lang="scss">
#nav {
  text-align: left;
  background-color: #FF7F50;
  a {
    font-weight: bold;
    color: #2c3e50;
    display: block;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.menu{
display: flex;
flex-direction: column;

justify-content: space-between;
width: 15%;
height: 100%;
  &__header{
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 10%;
    width: 100%;
    background-color: aliceblue;
    .menu__logo{
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 100%;
      }
      #menu_logo{
        height: 100%;
        width: 100%;
      }
  }
  &__main{
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }
  &__footer {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 10%;
    width: 100%;
    background-color: #FF0000;
  }
}
</style>