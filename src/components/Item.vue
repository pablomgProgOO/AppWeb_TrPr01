<script setup lang="ts">
import type { Jersey } from "../Scripts/Item";
defineProps<{ item: Jersey}>();
</script>

<template>
<tr class="card-product">
    <td> <h4>{{ item.Name }}</h4></td>
    <td v-if="item.Stock>0"><h4>{{ item.Stock }}</h4></td>
    <td v-else class="low-stock">Produit sans stock</td>
    <td>
      <button>Voir</button>
      <button>Modifier</button>
      <button>Dupliquer</button>
      <button>Supprimer</button>
      <button>Acheter</button>
      <button v-if="item.Stock>0">Vendre</button>
    </td>
  </tr>
</template>

<style scoped>
</style>