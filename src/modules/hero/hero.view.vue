<template lang="pug">
  card(title="Listagem De Super Heróis")
    list(
      :colunas="colunas"
      :linhas="heroes"
      :poderes="hero_superpower"
      :tela="name"
      )
    div(slot="footer")
      modal(v-show="isModalVisible" @close="closeModal"  :objeto="objeto" :tela="'cadastroHeroi'" :poderes="hero_superpower")
      button(type='button' @click="showModal")  Cadastrar Herói
      
     
</template>


<script>
import heroService from "./hero.service";
import heroes_Superpower from "../heroes_superpower/heroes_superpower.service"
import List from "@/components/list/list.component.vue";
import Card from "@/components/card.vue";
import Modal from '@/components/modal.vue';

export default {
  components: {
    List,
    Card,
    Modal
  },
  data() {
    return {
      name: "hero",
      heroes: [],
      hero_superpower: [],
      objeto: {
        realname:null,
        heroname:null
      },
      colunas: [
        {
          name: "id",
          title: "#"
        },
        {
          name: "realname",
          title: "Nome Real"
        },
        {
          name: "heroname",
          title: "Nome de herói"
        }
      ],
      isModalVisible: false
    };
  },
  methods: {
    getHeroes() {
      heroService.getAllHeroes().then(response => {
        this.heroes = response.data;
      });
    },
    getSuperpowerByHero() {
      heroes_Superpower.getHeroSuperpower().then(response => {
        this.hero_superpower = response.data;
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
    this.getSuperpowerByHero();
  }
};
</script>

<style lang="sass">

// .macete
//   background: rgba(black, .5)
//   z-index: 999
//   position: fixed
//   left: 0
//   top: 0
//   bottom: 0
//   right: 0

//   .filho-do-macete
//     background: white
//     position: absolute
//     padding: 10px
//     left: 50%
//     top: 50%
//     transform: translate(-50%, -50%)


</style>
