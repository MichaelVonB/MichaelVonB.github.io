<template>
  <div
    class="flex flex-col bg-white dark:bg-dark-300 sidebar sm:overflow-hidden border border-gray-300 dark:border-gray-600 navbar top-0 sticky"
  >
    <nav class="flex-grow">
      <ul>
        <div v-for="item in items" v-bind:key="item.to">
          <li :class="[ currentRoute === item.to && 'bg-gray-200 dark:bg-dark-100' , ' hover:bg-gray-100 dark:hover:bg-dark-200', 'whitespace-nowrap']">
            <router-link class="w-full h-full block p-2" :to="item.to">{{ item.name }}</router-link>
          </li>
        </div>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TheSidebar',
  data() {
    return {
      items: [
        {
          name: '🏠 Home',
          to: '/',
        },
        {
          name: '⚽ Trainings',
          to: '/trainings',
        },
        {
          name: '📅 Kalender',
          to: '/calendar',
        },
        {
          name: '➕ Training hinzufügen',
          to: '/add-training',
        }
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    }
  }
});
</script>

<style>

</style>
