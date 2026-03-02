<script setup lang="ts">
import type { Jersey } from "../Scripts/Item";
import Item from "./Item.vue";
defineProps<{items: Jersey[]}>();
</script>

<template>
<div v-if="items.length>0">
  <table>
    <thead>
      <tr>
        <th>Nom</th>
        <th>Stock</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      <Item class="" v-for="jersey in items" :key="jersey.id":item="jersey"/>
    </tbody>
  </table>
  </div>
  <div v-else>
    <h2>
      Aucun produit
    </h2>
  </div>
</template>

<style scoped>
</style>