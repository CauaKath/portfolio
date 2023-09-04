<template>
  <div class="flex justify-center">
    <div class="w-3/5 h-fit mt-40 mb-20 rounded overflow-hidden shadow-md">
      <div class="flex justify-evenly transition duration-500" :class="darkModeStore.isDarkModeEnabled ? 'bg-gray-800 text-gray-200' : 'bg-slate-300 text-gray-950'">
        <div class="w-3/6 p-10 overflow-hidden">
          <h1 class="text-4xl">About me</h1>
          <p class="mt-10 w-auto indent-8 leading-loose">
            Hello, my name is Cauã and I'm backend developer.
            I'm currently doing a degree in Systems Analysis and Development on UniSENAI college.
            I really like to create code that's why I'm coding this page to show my online resumé and improve my code skills.
            Born in Brazil but, want to know the entire world someday (Learning english to reach it).
            My goal is transform this web page into a portfolio with a lot of features, like games, blog, calculator, clocks and more.
            <br><br>
            Hope that you who is reading this enjoy the page :)
          </p>
        </div>

        <div class="flex justify-center items-center w-2/5">
          <img class="rounded-full" src="../assets/profile_picture.jpg" alt="Profile Picture">
        </div>
      </div>

      <div class="h-[40%] p-10 transition duration-500" :class="darkModeStore.isDarkModeEnabled ? 'bg-slate-900 text-slate-200' : 'bg-slate-400 text-slate-950'">
        <h2 class="text-lg font-bold">My Timeline</h2>

        <div class="relative max-w-[1140px] m-auto px-4 after:absolute after:bg-emerald-700 after:top-0 after:bottom-0 after:left-1/2 after:w-0.5">
          <TimelinePoint
            v-for="{ id, title, location, type, start, end } in timelines"
            :period="{
              id: id,
              title: title,
              location: location,
              type: type,
              start: start,
              end: end || 'Presente'
            }"
            :side="id % 2 === 0 ? 'right' : 'left'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import axios from 'axios'
import TimelinePoint from '../components/TimelinePoint.vue'
import { TimelinePointType, type ITimelinePoint } from '@/interfaces/timelinePoint'
import { useDarkModeStore } from '@/store/darkMode'

export default {
  name: 'Home',
  components: {
    TimelinePoint,
  },
  data() {
    return {
      darkModeStore: useDarkModeStore(),
      timelines: <ITimelinePoint[]>[],

      workType: TimelinePointType.WORK,
      educationType: TimelinePointType.EDUCATION,
      otherType: TimelinePointType.OTHER,
    }
  },
  async mounted() {
    this.timelines = await this.handleTimeline()
  },
  methods: {
    async handleTimeline(): Promise<ITimelinePoint[]> {
      const timelines: ITimelinePoint[] = await axios.get<{ data: ITimelinePoint[] }>(
        `${this.getTimelineServerUrl()}/timeline`
      )
        .then(response => response.data.data)
        .catch(error => {
          console.error(error)
          return []
        })
      
      if (!timelines.length) return []

      timelines.sort((a,b) => Date.parse(b.start) - Date.parse(a.start))

      return timelines
    },

    getTimelineServerUrl() {
      return import.meta.env.VITE_TIMELINE_SERVER_URL
    }
  }
}
</script>

<style>
</style>