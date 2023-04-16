<template>
    <div class="bg-white">
        <header class="relative">
            <nav aria-label="Top">

                <AnnoucementBanner/>


                <div class="bg-white">
                    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div class="border-b border-gray-200">
                            <div class="flex h-16 items-center justify-between">

                                <div class="hidden lg:flex lg:items-center">
                                    <NuxtLink to="/">
                                        <span class="sr-only">Your Company</span>
                                        <img alt="" class="h-8 w-auto" src="~/assets/logo.svg"/>
                                    </NuxtLink>
                                </div>


                                <NuxtLink class="lg:hidden" to="/">
                                    <span class="sr-only">Your Company</span>
                                    <img alt="" class="h-8 w-auto" src="~/assets/logo.svg"/>
                                </NuxtLink>

                                <div class="flex flex-1 items-center justify-end">
                                    <div class="flex items-center lg:ml-8">
                                        <div class="flex space-x-8">
                                            <div class="lg:flex">
                                                <NuxtLink class="-m-2 p-2 text-gray-400 hover:text-gray-500" to="/">
                                                    <span class="sr-only">Back to store</span>
                                                    <ArrowRightOnRectangleIcon aria-hidden="true" class="h-6 w-6"/>
                                                </NuxtLink>
                                            </div>
                                        </div>

                                        <span aria-hidden="true" class="mx-4 h-6 w-px bg-gray-200 lg:mx-6"/>

                                        <div class="flow-root">
                                            <NuxtLink class="group -m-2 flex items-center p-2" to="/cart">
                                                <ShoppingCartIcon
                                                        aria-hidden="true"
                                                        class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"/>
                                                <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                                                <span class="sr-only">items in cart, view bag</span>
                                            </NuxtLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div aria-label="Global" class="flex md:space-x-8 py-2">
                            <NuxtLink v-for="item in navigation" :key="item.name" :aria-current="item.current ? 'page' : undefined"
                                      :to="item.href"
                                      active-class="bg-gray-100 text-gray-900 hover:bg-gray-100"
                                      class="text-gray-900 hover:bg-gray-50 hover:text-gray-900 rounded-md py-2 px-3 inline-flex items-center text-sm font-medium">{{ item.name }}
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
import {ArrowRightOnRectangleIcon, ShoppingCartIcon} from '@heroicons/vue/24/outline'
import AnnoucementBanner from "./annoucementBanner";

const navigation = [
  {name: 'Home', href: '/account', current: false},
  {name: 'Orders', href: '/account/orders', current: true},
  {name: 'Addresses', href: '/account/addresses', current: false},
  {name: 'Payment Methods', href: '/account/payment-methods', current: false},
]
</script>
