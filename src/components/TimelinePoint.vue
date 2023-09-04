<template>
  <div class="relative top-2" :id="String(period.id)">
    <div class="container relative w-1/2 px-4 py-8 after:border-emerald-700 before:bg-emerald-700" :class="side">
      <div class="icon absolute inline-block w-10 h-10 p-1.5 top-[calc(50%-20px)] border-2 border-emerald-700 rounded-full text-lg text-center z-10">
        <font-awesome-icon :icon="getIcon()" class="h-fit text-slate-300" />
      </div>
      <div class="relative shadow-md opacity-80 bg-kathBlue p-8 rounded-r-full rounded-l-full" :class="side === 'left' ? 'pl-14 pr-28 text-right' : 'pl-28 pr-14'">
        <h2 class="mb-2.5 text-lg font-bold text-slate-200">
          {{ period.title }}
        </h2>

        <p class="m-0 text-base leading-5 italic text-slate-300">
          {{ period.location }}
        </p>

        <p class="m-0 mt-1 text-base leading-5 italic text-slate-300">
          {{ period.start }} - {{ period.end }}
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import type { ITimelinePoint } from '@/interfaces/timelinePoint';
import { TimelinePointType } from '@/interfaces/timelinePoint';
import type { PropType } from 'vue';

export default {
  name: 'TimelinePoint',
  props: {
    period: {
      type: Object as PropType<ITimelinePoint>,
      required: true,
    },
    side: {
      type: String,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    getIcon() {
      switch (this.period.type) {
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
.container.left {
  left: 0;
}

.container.right {
  left: 50%;
}

.container::after {
  content: '';
  position: absolute;
  width: 16px;
  height: 16px;
  top: calc(50% - 8px);
  right: -8px;
  background: #ffffff;
  border: 2px solid;
  border-radius: 16px;
  z-index: 1;
}

.container.right::after {
  left: -8px;
}

.container::before {
  content: '';
  position: absolute;
  width: 50px;
  height: 2px;
  top: calc(50% - 1px);
  right: 8px;
  z-index: 1;
}

.container.right::before {
  left: 8px;
}

.container.left .icon {
  right: 56px;
}

.container.right .icon {
  left: 56px;
}
</style>@/interfaces/timelinePoint