import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '..'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    plugins: [
      'relativeTime',
      'isoWeek',
      'utc',
      'weekday',
      'isToday',
      'isSameOrBefore',
      'isSameOrAfter',
      'localizedFormat',
      'timezone',
      'updateLocale',
      'localeData',
    ],
  }
})
