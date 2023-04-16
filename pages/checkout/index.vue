<template>
    <main class="mx-auto max-w-7xl px-4 pt-16 pb-24 sm:px-6 lg:px-8">
        <div class="mx-auto max-w-2xl lg:max-w-none">
            <h1 class="sr-only">Checkout</h1>
            <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
                <div>
                    <div>
                        <h2 class="text-lg font-medium text-gray-900">Contact information</h2>

                        <div class="mt-4">
                            <label class="block text-sm font-medium text-gray-700" for="email-address">Email
                                address</label>
                            <div class="mt-1">
                                <input id="email-address" autocomplete="email" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="email-address"
                                       type="email"/>
                            </div>
                        </div>
                    </div>
                    <div class="mt-10 border-t border-gray-200 pt-10">
                        <h2 class="text-lg font-medium text-gray-900">Shipping information</h2>

                        <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-4">
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="first-name">First
                                    name</label>
                                <div class="mt-1">
                                    <input id="first-name" autocomplete="given-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="first-name"
                                           type="text"/>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="last-name">Last name</label>
                                <div class="mt-1">
                                    <input id="last-name" autocomplete="family-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="last-name"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-sm font-medium text-gray-700" for="company">Company</label>
                                <div class="mt-1">
                                    <input id="company" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="company"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-sm font-medium text-gray-700"
                                       for="street-address">Address</label>
                                <div class="mt-1">
                                    <input id="street-address" autocomplete="street-address" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                           name="street-address"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-sm font-medium text-gray-700" for="street-address-2">Apartment,
                                    suite, etc.</label>
                                <div class="mt-1">
                                    <input id="street-address-2" autocomplete="street-address-2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                           name="street-address-2"
                                           type="text"/>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="city">City</label>
                                <div class="mt-1">
                                    <input id="city" autocomplete="address-level2" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="city"
                                           type="text"/>
                                </div>
                            </div>
                            <div v-if="!limitToUSA">
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
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="region">State
                                    {{ limitToUSA ? "" : "/ Province" }}</label>
                                <div class="mt-1">
                                    <input id="region" autocomplete="address-level1" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="region"
                                           type="text"/>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="postal-code">Postal
                                    code</label>
                                <div class="mt-1">
                                    <input id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="postal-code"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="sm:col-span-2">
                                <label class="block text-sm font-medium text-gray-700" for="phone">Phone</label>
                                <div class="mt-1">
                                    <input id="phone" autocomplete="tel" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="phone"
                                           type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <DeliveryMethods/>
                    <div class="mt-10 border-t border-gray-200 pt-10">
                        <h2 class="text-lg font-medium text-gray-900">Payment</h2>
                        <fieldset class="mt-4">
                            <legend class="sr-only">Payment type</legend>
                            <div class="space-y-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-10">
                                <div v-for="(paymentMethod, paymentMethodIdx) in paymentMethods" :key="paymentMethod.id"
                                     class="flex items-center">
                                    <input v-if="paymentMethodIdx === 0" :id="paymentMethod.id" checked=""
                                           class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                           name="payment-type"
                                           type="radio"/>
                                    <input v-else :id="paymentMethod.id" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" name="payment-type"
                                           type="radio"/>
                                    <label :for="paymentMethod.id"
                                           class="ml-3 block text-sm font-medium text-gray-700">{{
                                        paymentMethod.title
                                        }}</label>
                                </div>
                            </div>
                        </fieldset>
                        <div class="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
                            <div class="col-span-2">
                                <label class="block text-sm font-medium text-gray-700" for="card-number">Card
                                    number</label>
                                <div class="mt-1">
                                    <input id="card-number" autocomplete="cc-number" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="card-number"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="col-span-1">
                                <label class="block text-sm font-medium text-gray-700" for="expiration-date">Expiry
                                    date</label>
                                <div class="mt-1">
                                    <input id="expiration-date" autocomplete="cc-exp" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="expiration-date"
                                           type="text"/>
                                </div>
                            </div>
                            <div>
                                <label class="block text-sm font-medium text-gray-700" for="cvc">CVC</label>
                                <div class="mt-1">
                                    <input id="cvc" autocomplete="csc" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="cvc"
                                           type="text"/>
                                </div>
                            </div>
                            <div class="col-span-4">
                                <label class="block text-sm font-medium text-gray-700" for="name-on-card">Name on
                                    card</label>
                                <div class="mt-1">
                                    <input id="name-on-card" autocomplete="cc-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" name="name-on-card"
                                           type="text"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-10 lg:mt-0">
                    <h2 class="text-lg font-medium text-gray-900">Order summary</h2>
                    <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
                        <h3 class="sr-only">Items in your cart</h3>
                        <div class="ml-6 mr-6">
                            <CartItems/>
                        </div>
                        <dl class="space-y-6 border-t border-gray-200 py-6 px-4 sm:px-6">
                            <div class="flex items-center justify-between">
                                <dt class="text-sm">Subtotal</dt>
                                <dd class="text-sm font-medium text-gray-900">$64.00</dd>
                            </div>
                            <div class="flex items-center justify-between">
                                <dt class="text-sm">Shipping</dt>
                                <dd class="text-sm font-medium text-gray-900">$5.00</dd>
                            </div>
                            <div v-if="showTaxes" class="flex items-center justify-between">
                                <dt class="text-sm">Taxes</dt>
                                <dd class="text-sm font-medium text-gray-900">$5.52</dd>
                            </div>
                            <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                                <dt class="text-base font-medium">Total</dt>
                                <dd class="text-base font-medium text-gray-900">$75.52</dd>
                            </div>
                        </dl>
                        <div class="border-t border-gray-200 py-6 px-4 sm:px-6">
                            <button class="w-full rounded-md border border-transparent bg-indigo-600 py-3 px-4 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50"
                                    type="submit">
                                Confirm order
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </main>
</template>

<script setup>
import {ref} from 'vue'
import {useConfig} from "../../utils/useConfig";
import CartItems from "../../components/cartItems";
import DeliveryMethods from "../../components/deliveryMethods";

definePageMeta({
  layout: "store"
})

const paymentMethods = [
  {id: 'credit-card', title: 'Credit Card'},
  {id: 'paypal', title: 'PayPal'},
  {id: 'cash', title: 'Cash/Check'},
]

const open = ref(false)
const {showTaxes, limitToUSA} = useConfig()

</script>
