<template>
  <div>
    <div>
      <div class="bg-slate-800 px-4 py-2 rounded-t-md border border-slate-600">{{ year }}</div>
      <div>
        <div v-for="point in points" :key="point.id" class="flex border border-slate-600">
          <div class="flex justify-start items-center gap-4 p-2 w-3/5">
            <div class="icon w-4 h-4 text-md text-center flex justify-center items-center px-4">
              <font-awesome-icon :icon="getIcon(point.type)" class="text-slate-300" />
            </div>
            <div>
              <p class="text-blue-500 bg-sky-950 rounded px-2 text-sm">{{ point.type }}/{{ point.title }}</p>
              <span class="text-sm">{{ point.location }}</span>
            </div>
          </div>
          <div class="w-1/5 flex justify-start items-center text-sm">
            {{ point.start }} / {{ point.end || 'Today' }}
          </div>
          <div class="w-1/5 flex justify-end items-center">
            <p class="rounded-full px-4 py-1 text-sm mr-2" :class="point.end ? 'bg-purple-600' : 'bg-green-700'">{{ point.end ? 'Done' : 'In progress' }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ITimelinePoint } from '@/interfaces/timelinePoint';
import { TimelinePointType } from '@/interfaces/timelinePoint';

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
    }
  }
}
</script>

<style lang="scss">

</style>