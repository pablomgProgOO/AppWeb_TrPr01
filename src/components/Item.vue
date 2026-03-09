<script setup lang="ts">
import type { Jersey } from "../Scripts/Item";
const props = defineProps<{ item: Jersey}>();
const emit = defineEmits(["select", "edit", "duplicate", "delete"]);
const buy=()=>{
    props.item.Stock+=1
}
const sell=()=>{
    props.item.Stock-=1
}
</script>

<template>
<tr class="card-product">
    <td> <h4>{{ item.Name }}</h4></td>
    <td v-if="item.Stock>3"><h4>{{ item.Stock }}</h4></td>
    <td v-else class="low-stock">Produit en stock bas</td>
    <td>
      <button @click="$emit('select',props.item)" class="Select-button">V</button>
      <button @click="$emit('edit',props.item)" class="Edit-button">E</button>
      <button @click="$emit('duplicate',props.item)" class="Dupe-button">D</button>
      <button @click="$emit('delete',props.item)" class="Delete-button">X</button>
      <button @click="buy" class="Buy-button">+</button>
      <button v-if="item.Stock >0" @click="sell" class="Sell-button">-</button>
    </td>
  </tr>
</template>

<style scoped>
button{
  border-radius: 100%;
  size: 50%;
  font-size: 50%;
}
.low-stock{
  color: crimson;
}
.Sell-button{
  background-color: chocolate;
}
.Buy-button{
  background-color:darkgreen;
}
.Select-button{
  background-color:rgb(60, 5, 111)
}
.Delete-button{
  background-color:brown
}
.Edit-button{
  background-color:darkgoldenrod
}
.Dupe-button{
  background-color:rgb(193, 111, 155)
}
</style>