import { defineNuxtConfig } from 'nuxt/config'
import MyModule from '../src/module'

export default defineNuxtConfig({
  modules: [
    MyModule
  ],
  dayjs: {
    locales: ['en', 'ko'],
    defaultLocale: 'ko',
    defaultTimezone: 'Asia/Seoul',
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
      'localeData'
    ]
  }
})
