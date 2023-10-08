<template>
  <div>
    <div>
      <div class="px-4 py-2 rounded-t-md border border-slate-600" :class="getHeaderStyle()">{{ year }}</div>
      <div>
        <div v-for="point in points" :key="point.id" class="flex border-x border-b border-slate-600">
          <div class="flex justify-start items-center gap-4 p-2 w-3/5">
            <div class="icon w-4 h-4 text-md text-center flex justify-center items-center px-4">
              <font-awesome-icon :icon="getIcon(point.type)" class="transition delay-100" :class="darkModeStore.isDarkModeEnabled ? 'text-slate-300' : 'text-slate-950'" />
            </div>
            <div>
              <p class="rounded px-2 text-sm transition" :class="getTitleStyle()">{{ point.type }}/{{ point.title }}</p>
              <span class="text-sm">{{ point.location }}</span>
            </div>
          </div>
          <div class="w-1/5 flex justify-start items-center text-sm">
            {{ point.start }} / {{ point.end || 'Today' }}
          </div>
          <div class="w-1/5 flex justify-end items-center">
            <p class="rounded-full px-4 py-1 text-sm mr-2" :class="getStatusStyle(point.end)">{{ point.end ? 'Done' : 'In progress' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ITimelinePoint } from '@/interfaces/timelinePoint';
import { TimelinePointType } from '@/interfaces/timelinePoint';
import { useDarkModeStore } from '@/store/darkMode'

export default {
  name: 'TimelinePoint',
  props: {
    year: {
      type: String,
      required: true,
    },
    points: {
      type: Array<ITimelinePoint>,
      required: true,
    },
    side: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      darkModeStore: useDarkModeStore(),
    }
  },
  methods: {
    getIcon(type: TimelinePointType) {
      switch (type) {
        case TimelinePointType.WORK:
          return 'fa-solid fa-briefcase'
        case TimelinePointType.EDUCATION:
          return 'fa-solid fa-graduation-cap'
        default:
          return 'fa-solid fa-lightbulb'
      }
    },

    getHeaderStyle() {
      return this.darkModeStore.isDarkModeEnabled
        ? 'bg-slate-800'
        : 'bg-slate-500'
    },

    getTitleStyle() {
      return this.darkModeStore.isDarkModeEnabled
        ? 'text-blue-500 bg-sky-950'
        : 'text-blue-400 bg-sky-800'
    },

    getStatusStyle(end: string) {
      if (this.darkModeStore.isDarkModeEnabled) {
        return end ? 'bg-purple-600' : 'bg-green-700'
      } else {
        return end ? 'bg-violet-700' : 'bg-emerald-600'
      }
    }
  }
}
</script>

<style lang="scss">

</style>