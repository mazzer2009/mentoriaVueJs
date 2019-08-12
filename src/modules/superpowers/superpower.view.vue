<template lang="pug">
    div
        ul
            li(
            v-for="(superpower, index) in superpowers"
            :key="index"
            ) {{ superpower.superpoder }}
</template>

<script>
import superpowerService from "./superpower.service";

export default {
  data() {
    return {
      superpowers: []
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

