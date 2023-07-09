<script setup lang="ts">

import { computed, ref } from 'vue';
import Navbar from './components/Navbar.vue'
import Switch from './components/Switch.vue'
import { RouterView } from 'vue-router'

const darkModeRef = ref(true)

const darkMode = computed({
  get() {
    return darkModeRef.value
  },
  set(value) {
    darkModeRef.value = value
  }
})

</script>

<template>
  <div class="flex justify-center transition duration-500" :class="darkMode ? 'bg-gray-950 text-gray-200' : 'bg-gray-200 text-gray-950'">
    <Navbar class="fixed" />

    <Switch @update-dark-mode="updatedDarkMode => darkMode = updatedDarkMode" />

    <RouterView class="h-screen w-screen font-bold" />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;

  font-family: Roboto 400;
}

body {
  display: flex;
  justify-content: center;
}
</style>
