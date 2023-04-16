<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div>
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Payment Methods</h3>
                    <p class="mt-1 text-sm text-gray-500">Add or remove credit cards.</p>
                </div>
                <ul class="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
                    <li v-for="card in cards" :key="card.name"
                        class="col-span-1 divide-y divide-gray-200 rounded-lg bg-white shadow">
                        <div class="flex w-full items-center justify-between space-x-6 p-6">
                            <div class="flex-1 truncate">
                                <div class="flex items-center space-x-3">
                                    <h3 class="truncate text-sm font-medium text-gray-900">{{ card.name }}</h3>
                                </div>
                                <p class="mt-1 truncate text-sm text-gray-500">Expires on {{ card.exp }}</p>
                            </div>
                        </div>
                        <div>
                            <div class="-mt-px flex divide-x divide-gray-200">
                                <div class="-ml-px flex w-0 flex-1">
                                    <div
                                            class="relative inline-flex w-0 flex-1 items-center justify-center rounded-br-lg border border-transparent py-4 text-sm font-medium text-gray-700 hover:text-gray-500">
                                        <MinusCircleIcon aria-hidden="true" class="h-5 w-5 text-rose-900"/>
                                        <span class="ml-3 text-rose-900">Remove</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script setup>
import {MinusCircleIcon} from '@heroicons/vue/20/solid'

definePageMeta({
  layout: "profile"
})

const cards = [
  {
    name: 'Amex x1000',
    exp: '02/28',
  },
]
</script>
