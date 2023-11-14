<script lang="ts">
  import Tag from './Tag.vue';
  export default {
    props: {
      ingredientes: { type: Object, required: true },
    },
    components: {Tag}
  }
</script>
<template>
  <section>
    <span class="subtitulo-lg sua-lista-texto">
        Sua lista:
    </span>
    <ul class="ingredientes-sua-lista" v-if="ingredientes.length != 0">
      <li v-for="ingrediente in ingredientes" :key="ingrediente">
        <Tag :tag="ingrediente" actived />
      </li>
    </ul>
    <p class="paragrafo lista-vazia" v-else>
      <img src="../assets/imagens/icones/lista-vazia.svg" alt="Sem itens na lista" title="Sem itens na lista" />
      Sua lista está vazia, selecione ingredientes para iniciar.
    </p>
  </section>
</template>
<style>
</style>