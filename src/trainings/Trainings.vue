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
import { defineComponent } from "vue";
import { Training } from "./training.model";
import TrainingComponent from './Training.vue';

export default defineComponent ({
name: 'Trainings',
components: {
  TrainingComponent
},
data() {
  return {
    trainings: [{
      id: 1,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 10,
      maxPlayers: 12,
      location: 'Sporthalle am Michel'
    },
    {
      id: 2,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 3,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 4,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 5,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 6,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 7,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 8,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 9,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    },
    {
      id: 10,
      time: new Date().toLocaleDateString('de-De', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }),
      players: 4,
      maxPlayers: 12,
      location: 'Sporthalle am Stadtpark'
    }] as Training[]
  }
},
})
</script>