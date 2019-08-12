<template lang="pug">
  div.hero__main
    h1 Listagem De Super Heróis
    table.tabela
      thead
        tr
          th.hero__header(
          v-for="(coluna, index) in colunas"
          :key="index"
          ) {{ coluna }}
      tbody
        tr.hero__row(
          v-for="(hero, rindex) in heroes"
          :key="rindex"
        )
          td.hero__data(
            v-for="(col, index) in colunas"
            :key="index"
          ) {{ hero[col] }}
</template>


<script>
import heroService from "./hero.service";

export default {
  data() {
    return {
      heroes: [],
      colunas: ['id','heroname','realname' ]
    };
  },
  methods: {
    getHeroes() {
      heroService.getAllHeroes().then(response => {
        this.heroes = response.data;
        console.log(this.heroes);
      });
    }
  },
  created() {
    this.getHeroes();
  }
};
</script>

<style lang="sass"> 

.view > html, body
  width: 100%
.hero__main
  display: flex
  flex-direction: column
  align-content: center
  justify-content: space-between

  width: 70%
  padding-left: 40px
.view > table, th, td
  border: 1px solid black
  padding: 5px
  text-align: left
.tabela
  border-collapse: collapse
  width: 100%

.hero__row
  &:nth-child(even)
    background: #f2f2f2
  &:hover
    background: #f2f2f2
.hero__header
  height: 50px
  background-color: #FF7F50
  color: white
  
</style>
