import { defineNuxtPlugin } from '#app'
import dayjs from 'dayjs/esm/index.js'
import '#build/dayjs.plugin.mjs'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
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
