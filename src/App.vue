<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Switch from './components/Switch.vue'
import { RouterView } from 'vue-router'

import { useDarkModeStore } from '@/store/darkMode'
import { computed } from 'vue';

const darkModeStore = useDarkModeStore()

const isDarkModeEnabled = computed(() => darkModeStore.isDarkModeEnabled)

</script>

<template>
  <div class="flex justify-center transition duration-500" :class="isDarkModeEnabled ? 'bg-gray-950 text-gray-200' : 'bg-gray-200 text-gray-950'">
    <Navbar class="fixed" />

    <Switch />

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
