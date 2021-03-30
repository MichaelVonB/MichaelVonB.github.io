<template>
  <div v-if="training"
    class="border dark:border-gray-500 p-2 dark:bg-dark-300 bg-gray-50 my-3
     hover:bg-gray-100 dark:hover:bg-dark-200 rounded shadow-md cursor-pointer flex flex-row justify-between flex-wrap"
    @click="detailed = !detailed"
  >
  <div>
    <p>{{ training.location }} am {{ training.time }}</p>
    <p>{{ training.players }} / {{ training.maxPlayers }}</p>

  </div>
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
import { Training } from './training.model';

export default defineComponent({
  name: 'Training',
  props: {
    training: Object as PropType<Training>,
  },
  data() {
    return {
      detailed: false,
    };
  },
  methods: {
    addUserToTraining() {
      alert('Sie wurden hinzugefügt');
    },
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
