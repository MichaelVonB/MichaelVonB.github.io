<template>
<div class="flex flex-col h-full lg:w-3/4 xl:w-1/2">             
  <h1 class="font-extrabold text-3xl mb-6">Trainings</h1>
  <div class="flex-auto ">
  <div  v-for="training in trainings" :key="training.id">
    <TrainingComponent  :training="training" />
  </div>
  </div>
</div>
  
</template>

<script lang="ts">
import { computed, defineComponent } from "vue";
import { Training } from "./training.model";
import TrainingComponent from './Training.vue';
import { useStore } from 'vuex'

export default defineComponent ({
name: 'Trainings',
components: {
  TrainingComponent
},
setup: () => {
  const store = useStore();
  return { store }
},
computed: {
  trainings(): Training[] {
    return this.store.state.training.state.trainings;
  }
}
})
</script>