<template>
    <div class="bg-white">
        <div class="mx-auto max-w-7xl px-4 py-4 sm:px-6 sm:py-6 lg:px-8">
            <div>
                <div>
                    <h3 class="text-lg font-medium leading-6 text-gray-900">Personal Information</h3>
                    <p class="mt-1 text-sm text-gray-500">Use a permanent address where you can receive mail.</p>
                </div>
                <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700" for="first-name">First name</label>
                        <div class="mt-1">
                            <input id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="first-name"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700" for="last-name">Last name</label>
                        <div class="mt-1">
                            <input id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="last-name"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700" for="email">Email address</label>
                        <div class="mt-1">
                            <input id="email" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email"
                                   type="email"/>
                        </div>
                    </div>

                    <div class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700" for="tel">Phone number</label>
                        <div class="mt-1">
                            <input id="tel" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="tel"
                                   type="tel"/>
                        </div>
                    </div>


                    <div v-if="!limitToUSA" class="sm:col-span-3">
                        <label class="block text-sm font-medium text-gray-700" for="country">Country</label>
                        <div class="mt-1">
                            <select id="country" autocomplete="country-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                    name="country">
                                <option>United States</option>
                                <option>Canada</option>
                                <option>Mexico</option>
                            </select>
                        </div>
                    </div>

                    <div class="sm:col-span-6">
                        <label class="block text-sm font-medium text-gray-700" for="street-address">Street
                            address</label>
                        <div class="mt-1">
                            <input id="street-address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="street-address"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-6">
                        <label class="block text-sm font-medium text-gray-700" for="street-address-2">Street address
                            2</label>
                        <div class="mt-1">
                            <input id="street-address-2" autocomplete="street-address-2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                   name="street-address-2"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label class="block text-sm font-medium text-gray-700" for="city">City</label>
                        <div class="mt-1">
                            <input id="city" autocomplete="address-level2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="city"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label class="block text-sm font-medium text-gray-700" for="region">State / Province</label>
                        <div class="mt-1">
                            <input id="region" autocomplete="address-level1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="region"
                                   type="text"/>
                        </div>
                    </div>

                    <div class="sm:col-span-2">
                        <label class="block text-sm font-medium text-gray-700" for="postal-code">ZIP / Postal
                            code</label>
                        <div class="mt-1">
                            <input id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="postal-code"
                                   type="text"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useConfig} from "../../utils/useConfig";

definePageMeta({
  layout: "profile"
})

const {limitToUSA} = useConfig();
</script>
