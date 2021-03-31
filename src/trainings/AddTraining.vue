<template>
  <div class="bg-white dark:bg-dark-300 rounded shadow-xl overflow-hidden md:w-2/3 lg:w-1/2 xl:w-1/3">
    <div class="bg-indigo-700 py-2 pl-4 font-bold text-xl mb-8">
      Training Hinzufügen
    </div>
    <form action="javascript:void(0);" @submit="addTraining">
      <div class="px-4">
        <div>
          <span class="w-32 inline-block">Id:</span>
          <input class="input w-56" type="number" v-model="id" placeholder="id" required/>
        </div>
        <div>
          <span class="w-32 inline-block">Zeit und Datum:</span>
          <input class="input w-56" type="datetime-local" v-model="time" placeholder="time" required/>
        </div>
        <div>
          <span class="w-32 inline-block">Anzahl Spieler</span>
          <input class="input w-56" type="number" v-model="maxPlayers" placeholder="max-player" required/>
        </div>
        <div>
          <span class="w-32 inline-block">Ort</span>
          <input class="input w-56" type="text" v-model="location" placeholder="location" required/>
        </div>
      </div>
      <button type="submit" class="button m-4" >hinzufügen</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { useStore } from 'vuex';
import { TrainingAction } from '../store/modules/trainings';
import { Training } from './training.model';

export default defineComponent({
  name: 'add-Training',
  setup: () => {
    const id = ref(0);
    const time = ref(new Date().toISOString()).value.slice(0,-8);
    console.log(time);
    const maxPlayers = ref(0);
    const location = ref('');
    const store = useStore();
    return {
      store,
      id,
      time,
      maxPlayers,
      location,
    };
  },
  methods: {
    addTraining() {
      const training: Training = {
        id: this.id,
        time: new Date(this.time),
        players: 0,
        maxPlayers: this.maxPlayers,
        location: this.location,
      };
      this.time = '';
      this.store.dispatch(TrainingAction.addTraining, training);
    },
  },
});
</script>

<style>
input[type='number'] {
  -moz-appearance: textfield;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}
</style>
