<script setup lang="ts">
import { type Jersey } from "../Scripts/Item";
//import { ref} from "vue";
const emit = defineEmits(["clear"]);
const props= defineProps<{ product: Jersey}>();
//const localItem = ref(props.product);
const clear=()=>
{
    emit("clear");
}
</script>

<template>
    <h3>Demo</h3>
<div class="View">
    <h2>Nom: {{ product.Name }}</h2>
    <h3>Description: {{ product.Description }}</h3>
    <h4>Stock : {{ product.Stock }}</h4>
    <h4>Prix : {{ product.price }}</h4>
    <button @click="clear">Retour</button>
  </div>
</template>

<style scoped>
.View{
  background-color: rgb(6, 14, 96);
  padding: 10%;
  color: rgb(226, 206, 156);
  border: 4mm ridge gold;

}
</style>