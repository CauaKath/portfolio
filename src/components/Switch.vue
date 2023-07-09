<script lang="ts">
export default {
  name: 'Switch',
  data() {
    return {
      darkMode: false
    }
  },
  methods: {
    updateDarkMode() {
      this.$emit('updateDarkMode', this.darkMode)
    }
  }
}
</script>

<template>
  <div class="fixed top-4 right-4">
    <label class="w-16 h-8 inline-block">
      <input type="checkbox" v-model="darkMode" class="opacity-0 w-0 h-0" @click="updateDarkMode()" >
      <span
        class="
          slider absolute cursor-pointer top-0 left-0 bottom-0 right-0 bg-transparent border-2 transition duration-500 rounded-full
          before:absolute before:h-6 before:w-6 before:left-1 before:bottom-0.5 before:transition before:duration-500 before:rounded-full
        "
        :class="!darkMode ? 'before:bg-gray-200' : 'before:bg-gray-950 border-gray-950'"
      ></span>
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
