<script lang="ts">
  export default {
    props: { 
      tag: { type: String, required: true },
      actived: Boolean
    }
  }
</script>
<template>
  <span :class="['tag', { actived }]">
  {{ tag }}
  </span>
</template>
<style scoped>
.tag {
  display: inline-block;
  border-radius: 0.5rem;
  min-width: 4.25rem;
  padding: 0.5rem;
  text-align: center;
  transition: 0.2s;
  color: var(--cinza);
  background: var(--cinza-claro);
  font-weight: 400;
}
  .actived{
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
  }
</style>