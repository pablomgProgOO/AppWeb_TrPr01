<script setup lang="ts">
import {jersey2} from "../Scripts/Item.ts";
</script>

<template>
    <h3>Demo</h3>
<div class="card">
    <h2>Nom: {{ jersey2.Name }}</h2>
    <h3>Description: {{ jersey2.Description }}</h3>
    <h4>Stock : {{ jersey2.Stock }}</h4>
    <h4>Prix : {{ jersey2.price }}</h4>
    <button>Retour</button>
  </div>
</template>

<style scoped>
</style>