<template lang="pug">
  .card
    .card__header
      h1 {{ title }}
    .card__body
      slot
    .card__footer
      slot(name="footer")
</template>

<script>
export default {
  props: {
    title: String,
  },
};
</script>

<style lang="sass" scoped>
.card
  &__header
    background: #f44336
    color: #fff
    padding: 10px
    h1
      font-size: 22px
  &__body
    height: calc(100vh - 138px)
    padding: 10px
    box-sizing: border-box
  &__footer
    padding: 10px
    background: #333
    align-items: flex-start
    button
      border: none
      padding: 10px
      color: #fff
      border-radius: 4px
      background: #f44336
      display: inline-block
      margin: 4px
    
</style>
