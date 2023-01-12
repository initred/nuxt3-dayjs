# Nuxt Module
Example
<pre>
export default defineNuxtConfig({
    modules: [
        '@initred/nuxt3-dayjs',
    ],
    dayjs: {
        locales: ['en', 'ko'],
        defaultLocale: 'ko',
        defaultTimezone: 'America/New_York',
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
    },   
],
</pre>


## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start [playground](./playground) in development mode.
