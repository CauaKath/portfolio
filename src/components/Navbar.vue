<template>
  <div class="h-20 w-fit px-60 -mt-14 hover:translate-y-14 transition-transform duration-500 rounded-b-md flex justify-items-center items-center dark:bg-gray-900 gap-6">
    <Button
      text="Games"
      path="/games"
      :is-selected-page="pageStore.selectedPage === gamesPage"
      @click="pageStore.setSelectedPage(gamesPage)"
    />

    <Button
      text="About Me"
      path="/"
      :is-selected-page="pageStore.selectedPage === aboutMePage"
      @click="pageStore.setSelectedPage(aboutMePage)"
    />
    
    <Button
      text="Blog"
      path="/blog"
      :is-selected-page="pageStore.selectedPage === blogPage"
      @click="pageStore.setSelectedPage(blogPage)"
    />
  </div>
</template>

<script lang="ts">
import Button from '../components/Button.vue'
import { usePageStore } from '@/store/page'
import { Pages } from '@/interfaces/pages'

export default {
  name: 'Navbar',
  components: {
    Button,
  },
  data() {
    return {
      aboutMePage: Pages.ABOUT_ME,
      gamesPage: Pages.GAMES,
      blogPage: Pages.BLOG,

      pageStore: usePageStore()
    }
  }
}
</script>

<style lang="scss">
</style>