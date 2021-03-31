<template>
  <div class="flex wrap h-screen w-full flex-col overflow-hidden dark:text-gray-200">
    <AppBar v-on:toggle-open="toggleOpen" />
    <div class="flex-1 flex flex-col sm:flex-row overflow-y-auto">
      <transition name="fade">
        <TheSidebar class="sm:w-52" v-if="open" />
      </transition>
      <div class="flex-1 flex bg-gray-100 dark:bg-dark-500">
        <div class="px-6 flex-1 overflow-y-auto">
          <div class="container my-4">
            <router-view />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheSidebar from './components/TheSidebar.vue';
import AppBar from './components/TheAppBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    TheSidebar,
    AppBar,
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggleOpen() {
      this.open = !this.open;
    },
  },
});
</script>

<style>
.main {
  height: calc(100vh - 4rem);
}
@media (min-width: 640px) {
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
  max-width: 15rem;
}

.fade-enter-from,
.fade-leave-to {
  max-width: 0;
}
}
@media (max-width: 639px) {
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
  /* max-height: 15rem; */
}

.fade-enter-from,
.fade-leave-to {
  margin-top: -160px;
  transform: translateY(-160px);
}
}


.wrap {
  flex-flow: column;
}
</style>
