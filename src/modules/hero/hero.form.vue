<template lang="pug">
  div
    superpower-form(
      v-model="payload"
      v-if="isSuperPowerForm"
      @cancel="cancelModal"
      @submit="saveSuperPower"
      )
    form(@submit.prevent="submit" class="form" v-else)
      .form__body
        .form__itens
          div
            label(for="name") Nome
            input(id="name" v-model="value.realname" type="text" name="name")
          div
            label(for="heroname") Nome de Herói
            input(id="heroname" v-model="value.heroname" type="text" name="heroname")
      .form__body
        label.poderes(for="superpoder") Poderes
        button.btn__add(type="button" @click="addSuperPower") Adicionar
        list(
          :colunas="colunas"
          :linhas="value.superpowers"
          )
      .form__footer
        .btn__submit
          button.btn__salvar(type="submit") Salvar
          button.btn__fechar(type="button" @click="close" aria-label="Close modal") Fechar
</template>

<script>
import List from "@/components/list/list.component.vue";
import Modal from '@/components/modal.vue';
import SuperpowerForm from './superpower.form.vue';

export default {
  components: {
    List,
    Modal,
    SuperpowerForm,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isSuperPowerForm: false,
      colunas: [
        {
          name: "id",
          title: "#"
        },
        {
          name: "title",
          title: "Titulo"
        },
      ],
      payload: {
        id: null,
        title: null,
        description: null,
      },
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.payload);
    },
    close() {
      this.$emit('close');
    },
    addSuperPower() {
      this.isSuperPowerForm = true;
    },
    cancelModal() {
      this.isSuperPowerForm = false;
    },
    saveSuperPower() {
      if (!this.value.superpowers) {
        this.value.superpowers = [];
      }
      this.value.superpowers.push(this.payload);
      this.payload = { title: null, description: null };
      this.isSuperPowerForm = false;
    },
  },
};
</script>
