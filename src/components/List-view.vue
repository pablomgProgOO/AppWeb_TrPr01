<script setup lang="ts">
import type { Jersey } from "../Scripts/Item";
import Item from "./Item.vue";
import { ref , computed} from "vue";
const props = defineProps<{ items: Jersey[] }>();
const emit = defineEmits(["select", "edit", "duplicate", "delete"]);
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
        <div v-if="filteredProducts.length>0">
          <table>
            <thead>
              <tr>
                <th>Nom</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <Item class="" v-for="jerseyItem in filteredProducts" 
              :key="jerseyItem.id":item="jerseyItem" 
              @delete="$emit('delete',jerseyItem)" 
              @duplicate="$emit('duplicate',jerseyItem)" 
              @edit="$emit('edit',jerseyItem)" 
              @select="$emit('select',jerseyItem)"/>
            </tbody>
          </table>
          </div>
          <div v-else>
            <h2>
              Aucun produit
            </h2>
        </div>
    </div>
</template>

<style scoped>
</style>