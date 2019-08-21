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
    height: calc(100vh - 80px)
    padding: 10px
    box-sizing: border-box
  &__footer
    height: 100%
    background: #333
</style>
