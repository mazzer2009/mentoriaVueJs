<template lang="pug">
  .list
    table.list__table
      thead
        tr
          th.list__header(
          v-for="(coluna, index) in colunas"
          :key="index"
          ) {{ coluna.title }}
      tbody
        tr.list__row(
          v-for="(linha, rIndex) in linhas"
          :key="rIndex"
          )
          td.list__data(
            v-for="(col, index) in colunas"
            :key="index"
            ) {{ linha[col.name] }}
</template>


<script>
export default {
  props: {
    colunas: {
      type: Array,
      required: true,
    },
    linhas: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="sass" scoped>
.list
  overflow-y: auto
  overflow-x: hidden
  height: 100%
  display: flex
  flex-direction: column
  border-style: groove
  &__table
    border-collapse: collapse
    width: 100%
    table, th, td
      border: 1px solid black
      padding: 5px
      text-align: left
    thead th
      position: sticky
      top: -1px
  &__row
    transition: all .25s
    cursor: pointer
    &:nth-child(even)
      background: rgba(black, .05)
    &:hover
      background: rgba(black, .15)
  &__header
    height: 50px
    background-color: #f44336
    color: white
</style>
