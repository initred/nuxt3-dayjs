import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, addTemplate, createResolver } from '@nuxt/kit'

export interface ModuleOptions {
  locales?: string[],
  defaultLocale?: string | null,
  plugins?: string[],
  defaultTimezone?: string | null
}

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name: '@initred/nuxt3-dayjs',
    configKey: 'dayjs',
    compatibility: {
      nuxt: '^3.0.0'
    }
  },
  defaults: {
    locales: [],
    defaultLocale: 'en',
    plugins: [
      'utc',
      'timezone'
    ],
    defaultTimezone: null
  },
  setup (options, nuxt) {
    const { resolve } = createResolver(import.meta.url)
    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))
    nuxt.options.build.transpile.push(runtimeDir)
    addPlugin(resolve(runtimeDir, 'plugin'))
    addTemplate({
      filename: 'dayjs.plugin.mjs',
      getContents: () => getContents(options)
    })
  }
})

const getContents = ({ plugins, defaultLocale, locales, defaultTimezone }: ModuleOptions): string => {
  locales = [...new Set(locales)]
  plugins = [...new Set(plugins)]

  let contents = ''

  contents += 'import dayjs from \'dayjs/esm/index.js\'\n'
  contents += locales?.map(locale => `import 'dayjs/esm/locale/${locale}'`).join('\n')
  contents += '\n'
  contents += plugins?.map(plugin => `import ${plugin.replace(/[^A-Za-z]/g, '_')} from 'dayjs/esm/plugin/${plugin}'`).join('\n')
  contents += '\n'
  contents += plugins?.map(plugin => `dayjs.extend(${plugin.replace(/[^A-Za-z]/g, '_')})`).join('\n')
  contents += '\n'
  if (defaultLocale) { contents += `dayjs.locale('${defaultLocale}')\n` }
  if (defaultTimezone) { contents += `dayjs.tz.setDefault('${defaultTimezone}')\n` }

  return contents
}
