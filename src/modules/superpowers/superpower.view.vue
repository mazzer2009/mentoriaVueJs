<template lang="pug">
  card(title="Listagem de super poderes")
    list(
      :colunas="colunas"
      :linhas="superpowers"
  )
    div(slot="footer")
</template>

<script>
import List from '@/components/list/list.component.vue';
import Card from '@/components/card.vue'
import superpowerService from "./superpower.service";


export default {
  components: {
    List,
    Card,
  },
  data() {
    return {
      superpowers: [],
      colunas: [
        {
          name: 'id',
          title: '#'
        },
        {
          name:'superpoder',
          title: 'Super Poder'
        }

      ] 
    };
  },
  methods: {
    getSuperpower() {
      superpowerService.getAllSuperpowers().then(response => {
        this.superpowers = response.data;
      });
    }
  },
  created() {
    this.getSuperpower();
  }
};
</script>

