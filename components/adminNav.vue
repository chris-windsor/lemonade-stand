<template>
    <div class="bg-white">

        <TransitionRoot :show="open" as="template">
            <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
                <TransitionChild as="template" enter="transition-opacity ease-linear duration-300"
                                 enter-from="opacity-0"
                                 enter-to="opacity-100" leave="transition-opacity ease-linear duration-300"
                                 leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-black bg-opacity-25"/>
                </TransitionChild>

                <div class="fixed inset-0 z-40 flex">
                    <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
                                     enter-from="-translate-x-full" enter-to="translate-x-0"
                                     leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
                                     leave-to="-translate-x-full">
                        <DialogPanel
                                class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                            <div class="flex px-4 pt-5 pb-2">
                                <button class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        type="button"
                                        @click="open = false">
                                    <span class="sr-only">Close menu</span>
                                    <XMarkIcon aria-hidden="true" class="h-6 w-6"/>
                                </button>
                            </div>


                            <TabGroup as="div" class="mt-2">
                                <div class="border-b border-gray-200">
                                    <TabList class="-mb-px flex space-x-8 px-4">
                                        <Tab v-for="category in navigation.categories" :key="category.name"
                                             v-slot="{ selected }"
                                             as="template">
                                            <button
                                                    :class="[selected ? 'text-indigo-600 border-indigo-600' : 'text-gray-900 border-transparent', 'flex-1 whitespace-nowrap border-b-2 py-4 px-1 text-base font-medium']">
                                                {{ category.name }}
                                            </button>
                                        </Tab>
                                    </TabList>
                                </div>
                                <TabPanels as="template">
                                    <TabPanel v-for="(category, categoryIdx) in navigation.categories"
                                              :key="category.name"
                                              class="space-y-12 px-4 pt-10 pb-6">
                                        <div class="grid grid-cols-1 items-start gap-y-10 gap-x-6">
                                            <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                                <div>
                                                    <p :id="`mobile-featured-heading-${categoryIdx}`"
                                                       class="font-medium text-gray-900">
                                                        Featured</p>
                                                    <ul :aria-labelledby="`mobile-featured-heading-${categoryIdx}`"
                                                        class="mt-6 space-y-6"
                                                        role="list">
                                                        <li v-for="item in category.featured" :key="item.name"
                                                            class="flex">
                                                            <NuxtLink :to="item.href" class="text-gray-500">{{
                                                                item.name
                                                                }}
                                                            </NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                                <div>
                                                    <p id="mobile-categories-heading" class="font-medium text-gray-900">
                                                        Categories</p>
                                                    <ul aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6"
                                                        role="list">
                                                        <li v-for="item in category.categories" :key="item.name"
                                                            class="flex">
                                                            <NuxtLink :to="item.href" class="text-gray-500">{{
                                                                item.name
                                                                }}
                                                            </NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div class="grid grid-cols-1 gap-y-10 gap-x-6">
                                                <div>
                                                    <p id="mobile-collection-heading" class="font-medium text-gray-900">
                                                        Collection</p>
                                                    <ul aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6"
                                                        role="list">
                                                        <li v-for="item in category.collection" :key="item.name"
                                                            class="flex">
                                                            <NuxtLink :to="item.href" class="text-gray-500">{{
                                                                item.name
                                                                }}
                                                            </NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div>
                                                    <p id="mobile-brand-heading" class="font-medium text-gray-900">
                                                        Brands</p>
                                                    <ul aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6"
                                                        role="list">
                                                        <li v-for="item in category.brands" :key="item.name"
                                                            class="flex">
                                                            <NuxtLink :to="item.href" class="text-gray-500">{{
                                                                item.name
                                                                }}
                                                            </NuxtLink>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>

                            <div class="space-y-6 border-t border-gray-200 py-6 px-4">
                                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                                    <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{
                                        page.name
                                        }}</a>
                                </div>
                            </div>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </TransitionRoot>

        <header class="relative">
            <nav aria-label="Top">

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

                                <div class="hidden h-full lg:flex">

                                    <PopoverGroup class="ml-8">
                                        <div class="flex h-full justify-center space-x-8">
                                            <Popover v-for="(category, categoryIdx) in navigation.categories"
                                                     :key="category.name"
                                                     v-slot="{ open }" class="flex">
                                                <div class="relative flex">
                                                    <PopoverButton
                                                            :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">
                                                        {{ category.name }}
                                                    </PopoverButton>
                                                </div>

                                                <transition enter-active-class="transition ease-out duration-200"
                                                            enter-from-class="opacity-0"
                                                            enter-to-class="opacity-100"
                                                            leave-active-class="transition ease-in duration-150"
                                                            leave-from-class="opacity-100" leave-to-class="opacity-0">
                                                    <PopoverPanel
                                                            class="absolute inset-x-0 top-full text-gray-500 sm:text-sm z-10">

                                                        <div aria-hidden="true"
                                                             class="absolute inset-0 top-1/2 bg-white shadow"/>

                                                        <div class="relative bg-white">
                                                            <div class="mx-auto max-w-7xl px-8">
                                                                <div class="grid grid-cols-2 items-start gap-y-10 gap-x-8 pt-10 pb-12">
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p :id="`desktop-featured-heading-${categoryIdx}`"
                                                                               class="font-medium text-gray-900">
                                                                                Inventory</p>
                                                                            <ul :aria-labelledby="`desktop-featured-heading-${categoryIdx}`"
                                                                                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                role="list">
                                                                                <li v-for="item in category.inventory"
                                                                                    :key="item.name" class="flex">
                                                                                    <NuxtLink :to="item.href"
                                                                                              class="hover:text-gray-800">
                                                                                        {{
                                                                                        item.name
                                                                                        }}
                                                                                    </NuxtLink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div>
                                                                            <p id="desktop-categories-heading"
                                                                               class="font-medium text-gray-900">
                                                                                Discounts</p>
                                                                            <ul aria-labelledby="desktop-categories-heading"
                                                                                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                role="list">
                                                                                <li v-for="item in category.discounts"
                                                                                    :key="item.name" class="flex">
                                                                                    <NuxtLink :to="item.href"
                                                                                              class="hover:text-gray-800">
                                                                                        {{
                                                                                        item.name
                                                                                        }}
                                                                                    </NuxtLink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                    <div class="grid grid-cols-2 gap-y-10 gap-x-8">
                                                                        <div>
                                                                            <p id="desktop-collection-heading"
                                                                               class="font-medium text-gray-900">
                                                                                Collection</p>
                                                                            <ul aria-labelledby="desktop-collection-heading"
                                                                                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                role="list">
                                                                                <li v-for="item in category.collection"
                                                                                    :key="item.name" class="flex">
                                                                                    <NuxtLink :to="item.href"
                                                                                              class="hover:text-gray-800">
                                                                                        {{
                                                                                        item.name
                                                                                        }}
                                                                                    </NuxtLink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>

                                                                        <div>
                                                                            <p id="desktop-brand-heading"
                                                                               class="font-medium text-gray-900">
                                                                                Brands</p>
                                                                            <ul aria-labelledby="desktop-brand-heading"
                                                                                class="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                                                                role="list">
                                                                                <li v-for="item in category.brands"
                                                                                    :key="item.name" class="flex">
                                                                                    <NuxtLink :to="item.href"
                                                                                              class="hover:text-gray-800">
                                                                                        {{
                                                                                        item.name
                                                                                        }}
                                                                                    </NuxtLink>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </PopoverPanel>
                                                </transition>
                                            </Popover>

                                            <a v-for="page in navigation.pages" :key="page.name" :href="page.href"
                                               class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{
                                                page.name
                                                }}</a>
                                        </div>
                                    </PopoverGroup>
                                </div>


                                <div class="flex flex-1 items-center lg:hidden">
                                    <button class="-ml-2 rounded-md bg-white p-2 text-gray-400" type="button"
                                            @click="open = true">
                                        <span class="sr-only">Open menu</span>
                                        <Bars3Icon aria-hidden="true" class="h-6 w-6"/>
                                    </button>


                                    <a class="ml-2 p-2 text-gray-400 hover:text-gray-500" href="#">
                                        <span class="sr-only">Search</span>
                                        <MagnifyingGlassIcon aria-hidden="true" class="h-6 w-6"/>
                                    </a>
                                </div>


                                <NuxtLink class="lg:hidden" to="/">
                                    <span class="sr-only">Your Company</span>
                                    <img alt="" class="h-8 w-auto" src="~/assets/logo.svg"/>
                                </NuxtLink>

                                <div class="flex flex-1 items-center justify-end">
                                    <div class="flex items-center lg:ml-8">
                                        <div class="flex space-x-8">
                                            <div class="lg:flex">
                                                <a class="-m-2 p-2 text-gray-400 hover:text-gray-500" @click.prevent="logout">
                                                    <span class="sr-only">Logout</span>
                                                    <ArrowRightOnRectangleIcon aria-hidden="true" class="h-6 w-6"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {
    Dialog,
    DialogPanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    TransitionChild,
    TransitionRoot,
} from '@headlessui/vue'
import {ArrowRightOnRectangleIcon, Bars3Icon, MagnifyingGlassIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import {useUserStore} from "~/stores/user";

const router = useRouter();
const userStore = useUserStore()

onMounted(() => {
    $fetch('/api/users/me', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${userStore.token}`
        }
    }).catch(() => {
        logout();
    });
})

const logout = async () => {
    await $fetch('/api/auth/logout', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${userStore.token}`
        }
    })
    userStore.token = "";
    router.push({ path: "/" })
}

const navigation = {
  categories: [
    {
      name: 'Store',
      inventory: [
        {name: 'Products', href: '#'},
        {name: 'Shipments', href: '#'},
        {name: 'Returns', href: '#'},
      ],
      discounts: [
        {name: 'Coupons', href: '#'},
        {name: 'Sales', href: '#'},
        {name: 'Bundles', href: '#'},
        {name: 'Retention', href: '#'},
      ],
      shipping: [
        {name: 'Rates', href: '#'},
        {name: 'Sales', href: '#'},
        {name: 'Bundles', href: '#'},
        {name: 'Retention', href: '#'},
      ]
    },
    {
      name: 'Analytics',
      featured: [
        {name: 'Casual', href: '#'},
        {name: 'Boxers', href: '#'},
        {name: 'Outdoor', href: '#'},
      ],
      collection: [
        {name: 'Everything', href: '#'},
        {name: 'Core', href: '#'},
        {name: 'New Arrivals', href: '#'},
        {name: 'Sale', href: '#'},
      ],
      categories: [
        {name: 'Artwork Tees', href: '#'},
        {name: 'Pants', href: '#'},
        {name: 'Accessories', href: '#'},
        {name: 'Boxers', href: '#'},
        {name: 'Basic Tees', href: '#'},
      ],
      brands: [
        {name: 'Significant Other', href: '#'},
        {name: 'My Way', href: '#'},
        {name: 'Counterfeit', href: '#'},
        {name: 'Re-Arranged', href: '#'},
        {name: 'Full Nelson', href: '#'},
      ],
    },
  ],
  pages: [
    {name: 'Settings', href: '#'},
  ],
}

const open = ref(false)
</script>

<style scoped>

</style>
