<script setup lang="ts">
import { computed } from 'vue'
import { useNuxtApp } from '#app'
const { $dayjs } = useNuxtApp()

const weekDays = [0, 1, 2, 3, 4, 5, 6]
const getWeekDay = computed(() => weekDays.map(
  weekDay => $dayjs().day(weekDay).format('ddd')
))
</script>

<template>
  <div>
    {{ getWeekDay }}
  </div>
</template>
