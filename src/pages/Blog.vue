<template>
  <div class="home-container h-screen w-screen" :class="darkModeStore.isDarkModeEnabled ? 'bg-gray-800 text-gray-200' : 'bg-slate-300 text-gray-950'">
    <h1>Blog</h1>
  </div>
</template>

<script lang="ts">
import { useDarkModeStore } from '@/store/darkMode'

export default {
  name: 'Blog',
  data() {
    return {
      darkModeStore: useDarkModeStore(),
    }
  },
}
</script>

<style>
.home-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>