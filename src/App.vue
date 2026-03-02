<script setup lang="ts">
import  {type Jersey} from './Scripts/Item';
import * as items from './Scripts/Item';
import {ref} from 'vue';
const jerseys = ref<Jersey[]>([...items.jerseyList]);
import ListView from "./components/List-view.vue";
import Form from "./components/Form.vue";
import ItemView from "./components/Item-view.vue";

</script>

<template>
  <img src="../src/assets/Jersey_logo.JPG" alt="Logo">
  <h1>Gestionnaire de maillots</h1>
  <Form></Form>
  <ListView :items="jerseys" />
  <ItemView></ItemView>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
