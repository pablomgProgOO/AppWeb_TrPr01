<script setup lang="ts">
import List from "./List.vue";
import type { Jersey } from "../Scripts/Item";
import { ref , computed} from "vue";
const props = defineProps<{ items: Jersey[] }>();

const searchQuery = ref("");

const filteredProducts = computed(() =>
  props.items.filter((item) =>
    item.Name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
);
</script>

<template>
    <h2>Liste de maillots</h2>
    <div>
        <input class="form-control" v-model="searchQuery" placeholder="Rechercher un produit..." />
        <List :items="filteredProducts"/>
    </div>
</template>

<style scoped>
</style>