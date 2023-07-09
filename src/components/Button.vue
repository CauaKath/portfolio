<script lang="ts">
import { RouterLink } from 'vue-router'

export default {
  name: 'Button',
  props: {
    text: {
      type: String
    },
    path: {
      type: String
    },
    isSelectedPage: {
      type: Boolean
    }
  },
  components: {
    RouterLink
  }
}
</script>

<template>
  <div v-if="path">
    <RouterLink
      :to="path"
      custom
      v-slot="{ navigate }"
    >
      <button v-if="isSelectedPage" class="border-spacing-0 px-6 py-2 rounded font-bold font-sans text-blue-500 md:dark:hover:text-blue-600" type="button" @click="navigate" >
        {{ text }}
      </button>

      <button v-else class="border-spacing-0 px-6 py-2 rounded font-bold font-sans text-slate-100 md:dark:hover:text-blue-500" type="button" @click="navigate" >
        {{ text }}
      </button>
    </RouterLink>
  </div>

  <div v-else>
    <button class="border-spacing-0 px-6 py-2 rounded font-bold font-sans text-slate-100 md:dark:hover:text-blue-500" type="button" >
      {{ text }}
    </button>
  </div>
</template>

<style lang="scss">
.svg {
  filter: invert(86%) sepia(4%) saturate(181%) hue-rotate(182deg) brightness(111%) contrast(88%);
}
</style>
