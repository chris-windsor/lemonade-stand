import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime.js'
import advancedFormat from 'dayjs/plugin/advancedFormat.js'
import {defineNuxtPlugin} from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  dayjs.extend(relativeTime)
  dayjs.extend(advancedFormat)
  nuxtApp.provide('dayjs', dayjs)
})

declare module '#app' {
  interface NuxtApp {
    $dayjs: dayjs.Dayjs
  }
}

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $dayjs(date?: dayjs.ConfigType): dayjs.Dayjs
  }
}
