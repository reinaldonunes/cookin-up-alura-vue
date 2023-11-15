<script lang="ts">
  import SelecionarIngredientes from './SelecionarIngredientes.vue';
  import IngredientesLista from './IngredientesLista.vue'
  import Receitas from './Receitas.vue'

  type Page = 'SelecionarIngredientes' | 'Receitas'

  export default {
    data() {
        return {
            ingredientes: [] as string[],
            conteudo: 'SelecionarIngredientes' as Page
        };
    },
    methods: {
      addIngrediente(ingrediente: string){
        this.ingredientes.push(ingrediente);
      },
      removeIngrediente(ingrediente: string) {
        this.ingredientes = this.ingredientes.filter(iLista => ingrediente !== iLista);
      },
      goTo(page: Page){
        this.conteudo = page
      }
    },
    components: { SelecionarIngredientes, IngredientesLista, Receitas }
}
</script>
<template>
  <main class="conteudo-principal">
    <IngredientesLista :ingredientes="ingredientes" />
    <KeepAlive>
      <SelecionarIngredientes v-if="conteudo === 'SelecionarIngredientes'"
        @addIngrediente="addIngrediente"
        @removeIngrediente="removeIngrediente"
        @getRecipes="goTo('Receitas')" 
      />
      <Receitas v-else-if="conteudo === 'Receitas'"
        :ingredientes="ingredientes"
        @editRecipes="goTo('SelecionarIngredientes')"
      />
    </KeepAlive>
  </main>
</template>
<style>
.conteudo-principal {
  padding: 6.5rem 7.5rem;
  border-radius: 3.75rem 3.75rem 0rem 0rem;
  background: var(--creme, #FFFAF3);
  color: var(--cinza, #444);

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5rem;
}

.sua-lista-texto {
  color: var(--coral, #F0633C);
  display: block;
  text-align: center;
  margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
  display: flex;
  justify-content: center;
  gap: 1rem 1.5rem;
  flex-wrap: wrap;
}
.lista-vazia {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.25rem;

  color: var(--coral, #F0633C);
  text-align: center;
}

@media only screen and (max-width: 1300px) {
  .conteudo-principal {
    padding: 5rem 3.75rem;
    gap: 3.5rem;
  }
}

@media only screen and (max-width: 767px) {
  .conteudo-principal {
    padding: 4rem 1.5rem;
    gap: 4rem;
  }
}
</style>