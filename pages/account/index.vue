<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl py-8 sm:py-10 px-6 lg:px-8">
            <div class="mx-auto max-w-2xl lg:text-center">
                <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Good
                    {{ greeting() }}</p>
                <p class="mt-6 text-lg leading-8 text-gray-600">We appreciate you coming back to the shop. Let us know
                    if theres
                    anything we can do to help!</p>
            </div>
            <div class="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
                    <div v-for="feature in features" :key="feature.name" class="flex flex-col">
                        <dt class="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                            <component :is="feature.icon" aria-hidden="true" class="h-5 w-5 flex-none text-indigo-600"/>
                            {{ feature.name }}
                        </dt>
                        <dd class="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                            <p class="flex-auto">{{ feature.description }}</p>
                            <p class="mt-6">
                                <a :href="feature.href"
                                   class="text-base font-semibold leading-7 text-indigo-600">{{ feature.action }}{{
                                    ' '
                                    }}<span
                                            aria-hidden="true">→</span></a>
                            </p>
                        </dd>
                    </div>
                </dl>
            </div>
        </div>
    </div>
</template>

<script setup>
const {$dayjs} = useNuxtApp();
import {ArrowUturnLeftIcon, ChatBubbleLeftRightIcon, CheckBadgeIcon} from '@heroicons/vue/20/solid'

definePageMeta({
  layout: "profile"
})

const greeting = () => {
    const currentHour = $dayjs().hour();
    if (currentHour < 12) {
        return "Morning"
    } else if (currentHour > 12 && currentHour < 18) {
        return "Afternoon"
    } else {
        return "Evening"
    }
}

const features = [
  {
    name: 'Review one of your purchases',
    description:
      'Stoked about one of the items you received? We all want to hear about it!',
    href: '#',
    icon: CheckBadgeIcon,
    action: "Write about a product"
  },
  {
    name: 'Start a return',
    description:
      'We\'re sorry your purchase didn\'t go as expected. Let\'s get this sorted asap!',
    href: '#',
    icon: ArrowUturnLeftIcon,
    action: "Fill out return form"
  },
  {
    name: 'Get product support',
    description:
      'Let\'s find one of our product specialists that can assist you further in depth.',
    href: '#',
    icon: ChatBubbleLeftRightIcon,
    action: "Contact a representative"
  },
]
</script>
