<template lang="pug">
  div.hero__main
    h1 Listagem De Super Heróis
    div.div_tabela
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
    div.div_botao
      button(type='button' @click="showModal").botao  Cadastrar Herói
      modal(v-show="isModalVisible" @close="closeModal")
      button(type='button').botao Deletar Herói
</template>


<script>

import modal from "../../components/modal.vue"
import heroService from "./hero.service";

export default {
  components: {
    modal,
  },
  data() {
    return {
      heroes: [],
      colunas: ['id','heroname','realname' ],
      isModalVisible: false,
    };
  },
  methods: {
    getHeroes() {
      heroService.getAllHeroes().then(response => {
        this.heroes = response.data;
        console.log(this.heroes);
      });
    },
    showModal() {
      this.isModalVisible = true;
    },
    closeModal(){
      this.isModalVisible=false;
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
  overflow: hidden

.div_tabela
  overflow-y: auto
  overflow-x: hidden
  height: 400px
  display: flex
  flex-direction: column
  border-style: groove
.hero__main
  display: flex
  flex-direction: column
  align-content: center
  justify-content: space-between
  width: 70%
  padding-left: 40px

thead, th
  position: sticky
  top: 0


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
    background: #FF7F50
.hero__header
  height: 50px
  background-color: #FF0000
  color: white
  
.div_botao
  display: flex
  padding-botton: 30px
  justify-content: space-between
  
.botao
  background-color: #FF0000
  border: none
  color: white
  padding: 15px 32px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  font-weight: bold

.botao:active 
  background-color: #FF7F50
  box-shadow: 0 5px #666
  transform: translateY(4px)
</style>
