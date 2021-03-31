<template>
<div class="bg-white dark:bg-dark-300 rounded shadow overflow-hidden sm:w-3/4 md:w-2/3 xl:w-1/2 mx-auto">
  <div class="bg-indigo-500 p-4 text-xl font-bold mb-8">Login</div>
  <form action="javascript:void(0);" @submit="login">

  <div class="px-8">
    <input class="w-10/12 dark:bg-dark-200 p-2 border border-gray-600 rounded my-2 focus:ring-2" type="text" placeholder="Login" required>
  </div>
  <div class="px-8">
    <input class="w-10/12 dark:bg-dark-200 p-2  rounded my-2 focus:ring-2" :type="showPassword ? 'text': 'password'" placeholder="Password" required>
    <span v-on:click="showPassword = !showPassword" class="-m-10 p-2 cursor-pointer rounded-full hover:bg-dark-100">👀</span>

  </div>
  <button class="button m-8">Login</button>
  </form>
</div>
  
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
name: 'Login',
setup: () => {
  const userName = ref('');
  const password = ref('');
  const showPassword = ref(false);
  return {
    userName, password, showPassword
  }
},
methods: {
  login() {
    alert("Successfully logged in")
  }
}
})
</script>

<style>

</style>