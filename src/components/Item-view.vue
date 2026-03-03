<script setup lang="ts">
import { type Jersey } from "../Scripts/Item";
import { ref} from "vue";
const emit = defineEmits(["clear"]);
const props= defineProps<{ product: Jersey}>();
const localItem = ref(props.product);
const clear=()=>
{
    emit("clear");
}
</script>

<template>
    <h3>Demo</h3>
<div class="card">
    <h2>Nom: {{ localItem.Name }}</h2>
    <h3>Description: {{ localItem.Description }}</h3>
    <h4>Stock : {{ localItem.Stock }}</h4>
    <h4>Prix : {{ localItem.price }}</h4>
    <button @click="clear">Retour</button>
  </div>
</template>

<style scoped>
</style>