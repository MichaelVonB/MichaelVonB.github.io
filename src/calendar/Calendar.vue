<template>
  <div class="md:w-3/4 xl:w-2/3 2xl:w-1/2 border border-gray-500 shadow-xl rounded">
    <div class="bg-gray-600 dark:bg-indigo-700 flex justify-around items-center h-24">
      <div class="text-2xl cursor-pointer" @click="switchMonth(-1)">⏪</div>
      <div class="text-center text-gray-200">
        <div class=" text-2xl font-semibold">{{ date.toLocaleString('default', { month: 'long', year: 'numeric' }) }}</div>
        <div class="cursor-pointer " @click="resetMonth">{{ today }}</div>
      </div>
      <div class="text-2xl cursor-pointer" @click="switchMonth(1)">⏩</div>
    </div>
    <div class="grid grid-cols-7 p-2 bg-white dark:bg-dark-300">
      <div class="lg:hidden" v-for="day in daysShort" :key="day">
        {{ day }}
      </div>
      <div :class="[day == 'Donnerstag' && ' transform lg:-translate-x-1', 'hidden lg:block' ]" v-for="day in days" :key="day">
        {{ day }}
      </div>
    </div>
    <div class="grid grid-cols-7">
      <div
        v-for="index in firstDayIndex"
        :key="index"
        class="text-gray-400 day"
      >
        {{ lastDayPreviousMonth - firstDayIndex + index }}
      </div>
      <div
        v-for="index in lastDay"
        :key="index"
        :class="[activeDay(index) && 'bg-indigo-400', 'day']"
      >
        {{ index }}
      </div>
      <div v-for="index in daysNextMonth" :key="index" class="text-gray-400 day">
        {{ index }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from 'vue';
export default defineComponent({
  name: 'Calendar',
  setup: () => {
    let date = ref(new Date());
    const switchMonth = (direction: number) => {
      date.value = new Date(date.value.getFullYear(), date.value.getMonth() + direction);
    }
    const resetMonth = () => {
      date.value = new Date();
    }
    return {date, switchMonth, resetMonth};
  },
  data() {
    const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return {
      today: new Date().toLocaleDateString('de-DE', options),
      days: [
        'Montag',
        'Dienstag',
        'Mittwoch',
        'Donnerstag',
        'Freitag',
        'Samstag',
        'Sonntag',
      ],
      daysShort: [
        'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'
      ]
    };
  },
  methods: {
    activeDay(index: number): boolean {
      const today = new Date();
      return index === today.getDate() && this.date.getMonth() === today.getMonth() && this.date.getFullYear() === today.getFullYear();
    }
  },
  computed: {
    firstDayIndex(): number {
      const firstDayIndex = new Date(this.date.getFullYear(), this.date.getMonth(), 1).getDay() - 1
      return firstDayIndex < 0 ? 6 : firstDayIndex;
    },
    lastDay(): number {
      return new Date(
        this.date.getFullYear(),
        this.date.getMonth() + 1,
        0
      ).getDate();
    },
    daysNextMonth(): number {
      return 42 - this.lastDay - this.firstDayIndex;
    },
    lastDayPreviousMonth(): number {
      return new Date(
        this.date.getFullYear(),
        this.date.getMonth(),
        0
      ).getDate();
    }
  }
});
</script>

<style></style>
