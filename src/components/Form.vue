<script setup lang="ts">

</script>

<template>
<div class="">
    <div class="">
      <div class="">
        <h2 class="mb-0 ">Formulaire</h2>
      </div>
      <div>
        <form>
          <div>
            <label>Nom :</label>
            <div>
              <input placeholder="Entrez le nom" />
            </div>
          </div>

          <div class="">
            <label class="">Description :</label>
            <div >
              <textarea  class="form-control" rows="3" placeholder="Ajoutez une description"></textarea>
            </div>
          </div>

          <div class="">
            <label class="">Stock :</label>
            <div class="">
              <input type="number"  min="0" placeholder="Stock disponible" />
            </div>
          </div>

           <div class="">
            <label>prix :</label>
            <div>
              <input type="number"  min="0" placeholder="Donnez un prix :" />
            </div>
          </div>

          <div>
            <button type="button" class="btn btn-secondary">Annuler</button>
            <button type="submit" class="btn btn-secondary">Confirmer</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
</style>