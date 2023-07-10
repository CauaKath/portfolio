import { defineStore } from 'pinia'

export const useDarkModeStore = defineStore('darkMode', {
  state: () => {
    return {
      isDarkModeEnabled: !!window.matchMedia("(prefers-color-scheme: dark)").matches,
    }
  },
  actions: {
    switchDarkMode() {
      this.isDarkModeEnabled = !this.isDarkModeEnabled
    }
  }
})