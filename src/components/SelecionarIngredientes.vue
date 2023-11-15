<script lang="ts">
  import { getCategories, type ICategories } from '@/api/index';
  import Item from './Item.vue'
  import FindRecipes from './FindRecipes.vue'
  export default {
      data(){
        return{
          receitas: [] as ICategories[]
        }
     },
     async created(){
      this.receitas = await getCategories();
     },
     components: { Item, FindRecipes },
     emits: ['addIngrediente','removeIngrediente','getRecipes']
  }
</script>
<template>
  <section class="selecionar-ingredientes">
    <h1 class="cabecalho titulo-ingredientes">Ingredientes</h1>
    <p class="paragrafo-lg instrucoes">
      Selecione abaixo os ingredientes que você quer usar nesta receita.
    </p>

    <ul class="categorias">
      <li v-for="receita in receitas" key="receita.nome">
        <Item :categoria="receita" @addIngrediente="$emit('addIngrediente', $event)" @removeIngrediente="$emit('removeIngrediente',$event)"/>
      </li>
    </ul>

    <p class="paragrafo-dica">
      * Atenção: consideramos que vocẽ tenha em casa: sal, pimenta e água. 
    </p>
  </section>
  <FindRecipes texto="Buscar Receitas!" @click="$emit('getRecipes')" />
</template>
<style>
  .selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    max-width: 1600px;
  }

  .titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
  }

  .instrucoes {
    margin-bottom: 2rem;
  }

  .categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
  }

  @media only screen and (max-width: 767px) {
    .dica {
      margin-bottom: 2.5rem;
    }
  }
</style>