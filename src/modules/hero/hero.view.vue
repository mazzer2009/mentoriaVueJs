<template lang="pug">
  card(title="Listagem De Super Heróis")
    list(
      :colunas="colunas"
      :linhas="heroes"
      @select="selectHero"
      )
    div(slot="footer")
      modal(
        v-show="isModalVisible"
        @close="closeModal"
        title="Cadastro de Herois"
        )
        hero-form(
          v-model="payload"
          @close="closeModal"
          @submit="saveHero"
          )
      button(type='button' @click="showModal") Cadastrar Herói
</template>

<script>
import heroService from "./hero.service";
import heroes_Superpower from "../heroes_superpower/heroes_superpower.service"
import List from "@/components/list/list.component.vue";
import Card from "@/components/card.vue";
import HeroForm from "./hero.form.vue";
import Modal from '@/components/modal.vue';

export default {
  components: {
    List,
    Card,
    Modal,
    HeroForm,
  },
  data() {
    return {
      name: "hero",
      heroes: [],
      hero_superpower: [],
      payload: {
        id: null,
        realname: null,
        heroname: null,
        superpowers: [],
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
        },
        {
          name: "delete",
          title: "Opcoes"
        }
      ],
      isModalVisible: false
    };
  },
  methods: {
    selectHero(hero) {
      heroService.getHeroById(hero.id).then(response => {
        this.payload = response.data;
        this.isModalVisible = true;
      });
    },
    getHeroes() {
      heroService.getAllHeroes().then(response => {
        this.heroes = response.data.map((item) => {
          return {
            ...item,
            delete: true,
          };
        });
      });
    },
    getSuperpowerByHero() {
      heroes_Superpower.getHeroSuperpower().then(response => {
        this.hero_superpower = response.data;
      });
    },
    showModal() {
      this.payload = {
        id: null,
        realname: null,
        heroname: null,
        superpowers: [],
      };
      this.isModalVisible = true;
    },
    closeModal(){
      this.isModalVisible = false;
    },
    saveHero() {
      const { superpowers } = this.payload;
      delete this.payload.superpowers;

      heroService[this.payload.id ? 'updateHero' : 'addHero'](this.payload).then((response) => {
        this.closeModal();
        this.getHeroes();

        const { id } = response.data;
        superpowers.forEach((power) => {
          power.heroes_id = id;
          heroService[power.id ? 'updateSupertPower' : 'addSupertPower'](power);
        });

        alert('Operacao realizada com sucesso');
      });
    },
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
