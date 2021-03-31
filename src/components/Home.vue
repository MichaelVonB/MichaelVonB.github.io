<template>
  <h1 class="font-extrabold text-3xl mb-6">Home</h1>
  <p>Name: {{ name }}</p>

  <input
    type="text"
    class="p-2 border border-gray-600 rounded mr-2 mt-2 focus:ring-2"
    v-model="newName"
  />
  <button
    class="button"
    @click="saveName"
  >
    Submit
  </button>
  <p v-if="error" class="text-red-600">Dieses Feld darf nicht leer sein</p>
  <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor   </p>
    <p>sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. </p>
<p>    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt . </p>
   <p> At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takima </p>
    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor in</p>
    <p>At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no  
 </p>

</template>

<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const name = computed(() => {
  return store.state.user.name;
});
const newName = ref('');
let error = ref(false);

function saveName() {
  if (newName.value.length === 0) {
    setTimeout(() => {error.value = false}, 1500)
    error.value = true;
    return;
  }
  error.value = false;
  store.dispatch('saveName', newName.value);
  newName.value = '';
}
</script>
