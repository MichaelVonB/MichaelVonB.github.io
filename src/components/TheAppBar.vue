<template>
  <div
    class="w-full h-16 bg-indigo-600 shadow flex items-center justify-between"
  >
    <div class="flex flex-row items-center">
      <p
        class="px-6 cursor-pointer text-white hover:bg-indigo-700 h-12 w-12 leading-10 pl-4 text-left rounded-full"
        @click="toggleOpen"
      >🍔</p>
      <p class="font-bold text-xl">
        <router-link to="/">simple sports club.</router-link>
      </p>
    </div>
    <!-- <div class="flex flex-row items-center">
      <input type="text" class="p-2 border border-gray-600 rounded mr-2" />
      <button
        class="p-2 bg-white rounded-full hover:bg-indigo-300 active:bg-indigo-500"
      >
        🔍
      </button>
    </div> -->
    <button class="py-2 bg-white rounded-full hover:bg-indigo-500 ">
      <router-link class="p-4 py-8" to="/login">😎</router-link>
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AppBar',
  methods: {
    toggleOpen() {
      this.$emit('toggle-open');
    },
  },
});
</script>

<style></style>
