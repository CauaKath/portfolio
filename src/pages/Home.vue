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
            Born in Brazil but, I wanna know the entire world oneday (I'm learning english to reach this).
            My goal is to transform this web page into a portfolio with a lot of features, like games, blog, calculator, clocks and more.
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

        <div class="relative max-w-[1140px] m-auto px-4">
          <TimelinePoint
            v-for="(year, index) in Object.keys(timelinePoints)"
            class="mt-6"
            :year="year"
            :points="timelinePoints[year]"
            :side="index % 2 !== 0 ? 'right' : 'left'"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import TimelinePoint from '../components/TimelinePoint.vue'
import { useDarkModeStore } from '@/store/darkMode'
import { timelinePoints as timelineMock } from '../data/timeline'

export default {
  name: 'Home',
  
  components: {
    TimelinePoint
  },

  data() {
    return {
      darkModeStore: useDarkModeStore(),
      timelinePoints: timelineMock,
    }
  },
}
</script>

<style>
</style>