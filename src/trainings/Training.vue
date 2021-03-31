<template>
  <div v-if="training"
    class="border dark:border-gray-500 p-2 dark:bg-dark-300 bg-gray-50 my-3
     hover:bg-gray-100 dark:hover:bg-dark-200 rounded shadow-md cursor-pointer flex flex-row justify-between flex-wrap"
    @click="detailed = !detailed"
  >
  <div>
    <p>{{ training.location }} am {{ training.time.toLocaleDateString('de-DE', options) }}</p>
    <p>{{ training.players }} / {{ training.maxPlayers }}</p>

  </div>
  <div @click.stop="deleteTraining" class="hover:bg-dark-100 rounded-full px-2 pt-2">❌</div>
  <div :class="[detailed && 'transform rotate-180', 'arrow-rotate mr-6 my-2']">⏬</div>
  <transition name="dropdown-fade">
    <div v-if="detailed" class="h-auto w-full">
      <div class="flex-row items-center">
        <div class="border-b border-gray-300 mt-2"></div>
        <p>Michael, Isabella, Max, Moritz, Hanna</p>
        <button
          class="ml-2 p-2 px-3 bg-green-500 rounded hover:bg-green-600 active:bg-green-700 shadow-lg w-1/3"
          v-on:click.stop="addUserToTraining"
        >
          Teilnehmen
        </button>
      </div>
    </div>
  </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useStore } from "vuex";
import { Training } from './training.model';

export default defineComponent({
  name: 'Training',
  props: {
    training: Object as PropType<Training>,
  },
  setup() {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }
    return {
      options
    }
  },
  data() {
    const store = useStore();
    return {
      store,
      detailed: false,     
    };
  },
  methods: {
    addUserToTraining() {
      alert('Sie wurden hinzugefügt');
    },
    deleteTraining() {
      if (confirm("Wollen Sie dieses Training wirklich löschen?")) {
        this.store.dispatch('deleteTraining', this.training?.id)
      }     
    }
  },
});
</script>

<style>

.arrow-rotate {
  transition: transform 0.5s;
}

.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.5s ease-out;
}
.dropdown-fade-enter-from,
.dropdown-fade-leave-to {
  transform: translateY(-40px);
  opacity: 0;
}</style>
