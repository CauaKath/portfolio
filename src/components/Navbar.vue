<template>
  <div class="h-20 w-fit px-60 -mt-14 hover:translate-y-14 transition-transform duration-500 rounded-b-md flex justify-items-center items-center bg-gray-900 gap-6">
    <Button
      text="Games"
      path="/games"
      :is-selected-page="routeName === gamesPage"
    />

    <Button
      text="About Me"
      path="/home"
      :is-selected-page="routeName === aboutMePage"
    />
    
    <Button
      text="Blog"
      path="/blog"
      :is-selected-page="routeName === blogPage"
    />
  </div>
</template>

<script lang="ts">
import Button from '../components/Button.vue'
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
      blogPage: Pages.BLOG
    }
  },
  computed: {
    routeName() {
      return String(this.$route.name)
    },
  }
}
</script>

<style lang="scss">
</style>