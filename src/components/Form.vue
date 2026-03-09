<script setup lang="ts">
import { ref} from "vue";
import type { Jersey } from "../Scripts/Item";
import 'bootstrap';
const props = defineProps<{ selectedProduct: Jersey,selectedUsage: String | undefined,products: Jersey[] }>();
const emit = defineEmits(["submit", "cancel", "delete","edit"]);
const localItem = ref(props.selectedProduct);
const usage=ref(props.selectedUsage);
const isEditing=ref(false);
const isDeleting=ref(false);
const isDuplicating=ref(false);
const isAdding=ref(true);
const id=Date.now();
if(usage.value=="Modifier"){
    isEditing.value=true;
    isAdding.value=false;
}
if(usage.value=="Supprimer"){
    isDeleting.value=true;
    isAdding.value=false;
}
if(usage.value=="Dupliquer"){
    let newItem: Jersey={
        id:id,
        Name:localItem.value.Name,
        Description:localItem.value.Description,
        price:localItem.value.price,
        Stock:localItem.value.Stock
        
    }
    localItem.value=newItem
    isDuplicating.value=true;
    isAdding.value=false;
}
if(usage.value=="Ajouter"){
    let newBall: Jersey={
        id:id,
        Name:"",
        Description:"",
        price:0,
        Stock:0
    }
    localItem.value=newBall;
}


function validateAdd(){
  if (!localItem.value.Name.trim()) return "Le nom est requis.";
  if (localItem.value.Stock < 0) return "Le stock ne peut pas être négatif.";
  if (localItem.value.price < 0) return "Le prix ne peut pas être négatif.";
  return null;
};
// Utilisation de confirm box pour le moment - carte de message sera faite dans le futur
//https://stackoverflow.com/questions/54156534/how-to-create-alert-confirm-box-in-vue
function handleDelete(){
    if (confirm(`Voulez-vous vraiment supprimer ${localItem.value.Name} ?`)) {
    isDeleting.value=false;
    isAdding.value=true;
    emit("delete", localItem.value);
  }
};


function handleEdit(){
  if (confirm(`Voulez-vous vraiment Modifier ${localItem.value.Name} ?`)) {
    isEditing.value=false;
    isAdding.value=true;
    emit("edit", localItem.value);
  }
};
function handleAdd(){
    isAdding.value=true;
    const error = validateAdd();
  if (error) {

    return;
  }
  else {
    if(confirm(`Voulez-vous vraiment Ajouter ${localItem.value.Name} ?`)){
    emit("submit", localItem.value);
    }
  }
};

</script>

<template>
  <div class="Form-class">
    <div >
      <div >
        <h2 >{{ usage }}</h2>
      </div>
      <div>
        <form>
          <div >
            <label >Nom :</label>
            <div >
              <input v-model="localItem.Name" class="form-control" placeholder="Entrez le nom" />
            </div>
          </div>

          <div >
            <label >Description :</label>
            <div >
              <textarea v-model="localItem.Description" class="form-control" rows="3" placeholder="Ajoutez une description"></textarea>
            </div>
          </div>

          <div>
            <label >Stock :</label>
            <div >
              <input type="number" v-model="localItem.Stock" min="0" class="form-control" placeholder="Stock disponible" />
            </div>
          </div>

          <div >
            <label >Prix :</label>
            <div >
              <input type="number" v-model="localItem.price" min="0" class="form-control" placeholder="Stock disponible" />
            </div>
          </div>

          <div class="Submit-Buttons">
            <button type="button" @click="$emit('cancel')" class="Cancel-button">Annuler</button>
            <button v-if="isAdding" @click="handleAdd" type="button" class="Add-button">{{ usage }}</button>
            <button v-else-if="isDeleting" @click="handleDelete" type="button" class="Delete-button">{{ usage }}</button>
            <button v-else-if="isEditing" @click="handleEdit" type="button" class="Edit-button">{{ usage }}</button>
            <button v-else-if="isDuplicating" @click="handleAdd" type="button" class="Dupe-button">{{ usage }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.Error-message{
  color:red;
}
.Form-class{
  background-color: rgb(171, 233, 154);
  padding: 1%;
  color: rgb(9, 2, 65);
  border: 4mm ridge rgb(2, 107, 6);
}
.Submit-Buttons{
  margin: 1rem;
}
.Cancel-button{
  background-color: chocolate;
}
.Add-button{
  background-color:rgb(60, 5, 111)
}
.Delete-button{
  background-color:brown
}
.Edit-button{
  background-color:darkgoldenrod
}
.Dupe-button{
  background-color:darkolivegreen
}

</style>

