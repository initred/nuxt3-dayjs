import dayjs from 'dayjs/esm/index.js'
import { defineNuxtPlugin } from '#app'
import '#build/dayjs.plugin.mjs'

declare module '#app' {
  interface NuxtApp {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}

export default defineNuxtPlugin(() => {
  return {
    provide: {
      dayjs
    }
  }
})
