<script lang="ts">
import Tag from './Tag.vue';

export default {
  components: { Tag },
  props: {
    ingrediente: {type: String, required: true }
  },
  data(){
    return{
      selected: false
    }
  },
  methods: {
    onClick(){
      this.selected = !this.selected

      if(this.selected){
        this.$emit('addIngrediente', this.ingrediente)
      }else {
        this.$emit('removeIngrediente', this.ingrediente);
      }
    }
  },
  emits: ['addIngrediente','removeIngrediente']
}


</script>
<template>
  <button class="ingrediente" @click="onClick">
    <Tag :tag="ingrediente" :actived="selected" :aria-pressed="selected" />
  </button>
</template>
<style scoped>
  .ingrediente{
    cursor: pointer;
  }
</style>