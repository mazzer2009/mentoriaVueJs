<template lang="pug">
  card(title="Listagem De Super Heróis")
    list(
      :colunas="colunas"
      :linhas="heroes"
      :tela="name"
      )
    div(slot="footer")
      
     
</template>


<script>
import heroService from './hero.service';
import List from '@/components/list/list.component.vue';
import Card from '@/components/card.vue';

export default {
  components: {
    List,
    Card,
  },
  data() {
    return {
      name: 'hero',
      heroes: [],
      colunas: [
        {
          name: 'id',
          title: '#',
        },
        {
          name: 'realname',
          title: 'Nome Real',
        },
        {
          name: 'heroname',
          title: 'Nome de herói',
        },
      ],
      isModalVisible: false,
    };
  },
  methods: {
    getHeroes() {
      heroService.getAllHeroes().then(response => {
        this.heroes = response.data;
      });
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
