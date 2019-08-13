<script>
  export default {
    name: 'modal',
    data: {
        heroname: null,
        name: null,
        erros: []

    },
    methods: {
      close() {
        this.$emit('close');
      },
      checarFormulario(){
          if(this.name && this.heroname){
              return true;
          }
          this.erros= [];

          if(!this.name){
              this.erros.push("Nome Obrigatório")
          }if(!this.heroname){
              this.erros.push("Nome de Herói Obrigatório")
          }
      }
    },
  };
</script>
<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            <h1>Cadastro de herói</h1>
            <button type="button" class="btn-close" @click="close" aria-label="Close modal" >
              X
            </button>
          </slot>  
        </header>
        
        <section class="modal-body" id="modalDescription" >
          <slot name="body">
            <form @submit="checarFormulario" method="post" class="formulario">
                <p v-if="(1==2)">
                    <b>Para continuar, corrija os seguintes erros:</b>
                        <ul>
                            <li v-for="(erro, index ) in erros" :key="index"> {{ erro }}</li> 
                        </ul>
                </p>

                <p>
                    <label for="name"> Nome </label>
                    <input id="name" v-model="name" type="text" name="name">
                </p>
                <p>
                    <label for="heroname"> Nome de Herói </label>
                    <input id="heroname" v-model="name" type="text" name="heroname">
                </p>


            </form>
          </slot>
        </section>


        <footer class="modal-footer">
          <slot name="footer">
            I'm the default footer!

            <button
              type="button"
              class="btn-green"
              @click="close"
              aria-label="Close modal"
            >
              Close me!
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<style lang="sass">

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
    width: 65%
    height: 450px

  .modal-header,
  .modal-footer 
    padding: 15px
    display: flex
  

  .modal-header 
    border-bottom: 1px solid #eeeeee
    color: white
    background-color: #FF0000
    justify-content: space-between

  .modal-footer 
    border-top: 1px solid #eeeeee
    justify-content: flex-end
    background-color: #FF0000

  .modal-body 
    position: relative
    padding: 20px 10px
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

  .btn-green 
    color: white
    background: #4AAE9B
    border: 1px solid #4AAE9B
    border-radius: 2px
  

  .formulario 
      display: flex
      justify-content: space-around
</style>