<template lang="pug">
  form(@submit.prevent="submit" class="form" v-else)
    .form__body
      .form__itens
        div
          label(for="title") Titulo
          input(id="title" v-model="value.title" type="text")
        div
          label(for="description") Descricao
          textarea(id="description" v-model="value.description" type="text")
    .form__footer
      .btn__submit
        button.btn__salvar(type="submit") Salvar
        button.btn__fechar(type="button" @click="cancel" aria-label="Cancel modal") Cancelar
</template>

<script>
import List from "@/components/list/list.component.vue";
import Modal from '@/components/modal.vue';

export default {
  components: {
    List,
    Modal,
  },
  props: {
    value: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      isModalVisible: false,
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
      superpowers: [],
    };
  },
  methods: {
    submit() {
      this.$emit('submit', this.payload);
    },
    cancel() {
      this.$emit('cancel');
    },
    addSuperPower() {
      this.isModalVisible = true;
    },
    closeModal() {
      this.isModalVisible = false;
    },
  },
};
</script>
