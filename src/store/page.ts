import { defineStore } from 'pinia'
import { Pages } from '../interfaces/pages'

export const usePageStore = defineStore('page', {
  state: () => {
    return {
      selectedPage: Pages.ABOUT_ME,
    }
  },
  actions: {
    setSelectedPage(page: Pages) {
      this.selectedPage = page
    }
  }
})