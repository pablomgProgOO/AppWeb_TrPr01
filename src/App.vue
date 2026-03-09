<script setup lang="ts">
import  {type Jersey} from './Scripts/Item';
import * as items from './Scripts/Item';
import {ref} from 'vue';
import ListView from "./components/List-view.vue";
import Form from "./components/Form.vue";
import ItemView from "./components/Item-view.vue";
const jerseys = ref<Jersey[]>([...items.jerseyList]);
const useOfForm :String[]=["Ajouter","Modifier","Dupliquer","Supprimer"];
const selectedUseOfForm = ref<String | undefined>(useOfForm[0]);
const selectedItem = ref<Jersey>(items.jerseyNull);
const selectedViewItem = ref<Jersey>(items.jerseyNull);

const isFormVisible = ref(false);
const isItemViewVisible = ref(false);

function selectViewItem(item:Jersey) {
  selectedViewItem.value = item;
  isItemViewVisible.value=true
}
function selectDeleteItem(item:Jersey) {
  selectedItem.value = item;
  selectedUseOfForm.value=useOfForm[3];
  isFormVisible.value = true
}
function selectEditItem(item:Jersey) {
  selectedItem.value = item;
  selectedUseOfForm.value=useOfForm[1];
  isFormVisible.value = true
}
function selectDupeItem(item:Jersey) {
  selectedItem.value = item;
  selectedUseOfForm.value=useOfForm[2];
  isFormVisible.value = true 
}
function selectAddItem() {
  selectedItem.value = items.jerseyNull;
  selectedUseOfForm.value=useOfForm[0];
  isFormVisible.value = true
}


function handleFormSubmit(item:Jersey) {
  jerseys.value.push(item);
    isFormVisible.value = false;

}
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
// Trouver le Index - aussi dans le filtre de List-view.view
function handleDelete(item:Jersey) {
  jerseys.value = jerseys.value.filter((p: { id: number; }) => p.id !== item.id);
  selectedItem.value = items.jerseyNull;
  isFormVisible.value = false; 
}
function handleEdit(item:Jersey) {
  const index = jerseys.value.findIndex((p) => p.id === item.id);
    if (index !== -1) jerseys.value[index] = item;
    isFormVisible.value = false;
}


function downloadOnCsv()
{
//Code logique pour le format csv
//https://stackoverflow.com/questions/14964035/how-to-export-javascript-array-info-to-csv-on-client-side
  let csvItems = "ID,Nom,Description,Stock,Price\n";

  jerseys.value.forEach((item) => {
    const row = `${item.id},"${item.Name}","${item.Description}",${item.Stock}, ${item.price}`;
    csvItems += row + "\n";
  });
  //Code logique du download
  //https://stackoverflow.com/questions/74423711/save-csv-from-an-array-of-objects-in-vuejs-3
  const blob = new Blob([csvItems], { type: "text/csv" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "jerseys.csv";
  document.body.appendChild(a);
  a.click();
  //Comment liberer la memoire
  //https://developer.mozilla.org/en-US/docs/Web/API/URL/revokeObjectURL_static
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
</script>

<template>
  <Table>
    <TBody>
      <Tr>
        <td>
            <Form v-if="isFormVisible" :products="jerseys" :selectedProduct="selectedItem" 
            :selected-usage="selectedUseOfForm" @submit="handleFormSubmit" 
            @delete="handleDelete" @edit="handleEdit" @duplicate="handleFormSubmit" 
            @cancel="isFormVisible = false" />
        </td>
        <td>
            <h2>Gestionnaire de maillots</h2>
            <img src="../src/assets/Jersey_logo.JPG" alt="Logo" class="brand">
            <Button @click="selectAddItem">Ajouter</Button>
            <Button @click="downloadOnCsv">Télécharge la liste</Button>
        </td>
        <td>
            <ItemView v-if="isItemViewVisible" 
            :product="selectedViewItem" 
            @clear="isItemViewVisible=false">
            </ItemView>
        </td>
      </Tr>
    </TBody>
  </Table>
  <Table>
    <Tbody>
      <Tr>
        <td>
            <img src="../src/assets/Player_1.png" alt="Decoration-1" class="Decoration">
        </td>
        <td>
            <ListView :items="jerseys"
             @delete="selectDeleteItem" @duplicate="selectDupeItem" 
             @edit="selectEditItem" @select="selectViewItem"/>
        </td>
        <td>
            <img src="../src/assets/Player_2.png" alt="Decoration-2" class="Decoration">
        </td>
      </Tr>
    </TBody>
  </Table>
  <footer></footer>
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
.Decoration{
  width: 110%;
}
.brand{
  width: 50%;
}
</style>
