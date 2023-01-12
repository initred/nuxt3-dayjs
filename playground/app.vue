<script setup lang="ts">
import { useNuxtApp } from '#app';
import { computed } from 'vue';
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

