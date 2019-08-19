<template lang="pug">
  card(title="Listagem De Super Heróis")
    list(
      :colunas="colunas"
      :linhas="heroes"
      )
    div(slot="footer")
      modal(v-show="isModalVisible" @close="closeModal")
      button(type='button' @click="showModal")  Cadastrar Herói
      button(type='button') Deletar Herói
</template>


<script>
import heroService from './hero.service';
import Modal from '@/components/modal.vue';
import List from '@/components/list/list.component.vue';
import Card from '@/components/card.vue';

export default {
  components: {
    Modal,
    List,
    Card,
  },
  data() {
    return {
      heroes: [],
      colunas: [
        {
          name: 'id',
          title: '#',
        },
        {
          name: 'heroname',
          title: 'Nome de heroi',
        },
        {
          name: 'realname',
          title: 'Nome real',
        },
      ],
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
