<template lang="pug">
  ul
    li(
      v-for="(hero, index) in heroes"
      :key="index"
      ) {{ hero.name }}
</template>

<script>
import heroService from './hero.service';

export default {
  data() {
    return {
      heroes: [],
    };
  },
  methods: {
    getHeroes() {
      heroService.getAllHeroes().then((response) => {
        this.heroes = response.data;
      });
    },
  },
  created() {
    this.getHeroes();
  },
};
</script>
