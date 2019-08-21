<template lang="pug">
  transition(name="modal-fade")
    .modal-backdrop
      .modal(role="dialog"
             aria-labelledby="modalTitle"
             aria-describedby="modalDescription"
      )
        .modal-header(id="modalTitle")
          slot(name="header")
            h1 Cadastro de herói
            button(type="button" class="btn-close" @click="close" aria-label="Close modal") X
        section.modal-body(id="modalDescription")
          slot(name="body")
            form(@submit="atualizarHeroi()" class="form" v-if="this.tela ==='hero'")
              .form__body
               .form__itens
                 div
                  label(for="name") Nome
                  input(id="name" v-model="objeto.realname" type="text" name="name")
                 div
                  label(for="heroname") Nome de Herói
                  input(id="heroname" v-model="objeto.heroname" type="text" name="heroname")
              .form__footer
                .btn__submit
                  button.btn__salvar Salvar
                  button.btn__fechar(type="button" @click="close" aria-label="Close modal") Fechar
            
            form(@submit="atualizarHeroi()" class="form" v-else)
              .form__body
               .form__itens
                 div
                  label(for="name") Super Poder
                  input(id="name" v-model="objeto.superpoder" type="text" name="name")
                 div
                  label(for="descricao") Descrição
                  textarea.descricao(id="descricao" v-model="objeto.descrição" type="text" name="heroname" rows='7' cols='40')
              .form__footer
                .btn__submit
                  button.btn__salvar Salvar
                  button.btn__fechar(type="button" @click="close" aria-label="Close modal") Fechar
        footer.modal-footer
          slot(name="footer")
</template>

<script>
import axios from 'axios';
import heroService from '@/modules/hero/hero.service';
  export default {
    name: 'modal',
    data: {
      heroname: null,
      name: null,
      erros: []
    },
    props: {
      tela:String,
      objeto:Object
    },
    methods: {
      close() {
        this.$emit('close');    
      },
      atualizarHeroi(e){
        heroService.updateHero(this.objeto).then(response =>{
          console.log(response.data);
        }).catch((e)=>{
          console.error(e);
        })
        
       /* axios.post('http://5d4cc67c04ba7100147033b0.mockapi.io/heroapi/heroes/',{
          heroname: this.objeto.heroname,
          realname: this.objeto.realname
        }).then((response) =>{
          alert(response.data)
        })
        .catch((e)=>{
          alert(e)
        });*/
      
      }

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
     label
       padding-right: 3px
  .modal-backdrop
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    background-color: rgba(0, 0, 0, 0.3)
    display: flex
    justify-content: center
    align-items: center
  .modal
    background: #FFFFFF
    box-shadow: 2px 2px 20px 1px
    overflow-x: auto
    display: flex
    flex-direction: column
    width: 50%
    height: 450px
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
  .descricao
    resize: none
    vertical-align: top


</style>
