<template lang="pug">
  transition(name="fade")
    .modal-backdrop
      .modal(
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
        )
        .modal-header(id="modalTitle")
          slot(name="header")
            h1 {{ title }}
            button(type="button" class="btn-close" @click="close" aria-label="Close modal") X
        section.modal-body(id="modalDescription")
          slot
</template>

<script>
import axios from "axios";
import heroService from "@/modules/hero/hero.service";
import SuperpowerService from "@/modules/superpowers/superpower.service";
import { constants } from "crypto";
export default {
  name: "modal",
  props: {
    title: String,
  },
  methods: {
    close() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="sass">
  .form
   display: flex
   flex-direction: column
   justify-content: space-around
   height: 100%
   &__body
     height: calc(100%)
   &__itens
     display: flex
     justify-content: space-around
     height: 100%
   &__poderes
     display: flex
     flex-direction: column
     justify-content: center
     label
       padding-right: 3px
   &__nome
     display: flex
     flex-direction: column
     justify-content: space-around
     align-items: flex-start
     justify-items: flex-start
     label
      text-align: left
     input,label
       display: block
  .modal-backdrop
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background: rgba(black, .5)
    display: flex
    justify-content: center
    align-items: center
  .modal
    background: #FFFFFF
    box-shadow: 2px 2px 20px 1px
    overflow: auto
    display: flex
    flex-direction: column
    width: 50%
    min-height: 450px
    max-height: 80%
  .modal-header
    padding: 15px
    display: flex
    border-bottom: 1px solid #eeeeee
    color: white
    background-color: #f44336
    justify-content: space-between
  .modal-footer
    display: flex
    padding: 25px
    border-top: 1px solid #eeeeee
    justify-content: flex-end
    background-color: #f44336
  .modal-body
    position: relative
    padding-top: 10px
    height: 100%
    widows: 100%
  .btn-close
    border: none
    font-size: 20px
    padding: 20px
    cursor: pointer
    font-weight: bold
    color: #4AAE9B
    background: transparent
  .btn__submit
    button
      border: none
      padding: 10px
      color: #fff
      border-radius: 4px
      background: #f44336
      display: inline-block
      margin: 4px
  .formulario
      display: flex
      justify-content: space-around
  .poderes
    resize: none
    vertical-align: top
</style>
