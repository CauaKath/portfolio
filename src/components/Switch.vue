<script lang="ts">
import { useDarkModeStore } from '@/store/darkMode'
// import { SwitchType } from '@/interfaces/switchType'

export default {
  name: 'Switch',
  data() {
    return {
      darkModeStore: useDarkModeStore()
    }
  },
}
</script>

<template>
  <div class="fixed top-4 right-4">
    <label class="w-16 h-8 inline-block">
      <input type="checkbox" v-model="darkModeStore.isDarkModeEnabled" class="opacity-0 w-0 h-0" @click="darkModeStore.switchDarkMode()" >
      <span
        class="
          slider absolute flex gap-2 cursor-pointer top-0 left-0 bottom-0 right-0 bg-transparent border-2 transition duration-500 rounded-full
          before:absolute before:h-6 before:w-6 before:left-1 before:bottom-0.5 before:transition before:duration-500 before:rounded-full
        "
        :class="darkModeStore.isDarkModeEnabled ? 'before:bg-gray-200' : 'before:bg-gray-950 border-gray-950'"
      >
        <img src="../assets/sun.svg" class="relative h-5 top-1 left-1.5" />
        <img src="../assets/moon.svg" class="relative h-5 top-1 left-1.5" />
      </span>
    </label>
  </div>
</template>

<style lang="scss">
input:checked + .slider:before {
  -webkit-transform: translateX(28px);
  -ms-transform: translateX(28px);
  transform: translateX(28px);
}
</style>
