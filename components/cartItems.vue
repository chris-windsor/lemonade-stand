<template>
    <ul class="divide-y divide-gray-200" role="list">
        <li v-for="(product, productIdx) in products" :key="product.id" class="flex py-6 sm:py-10">
            <div class="flex-shrink-0">
                <img :alt="product.imageAlt" :src="product.imageSrc"
                     class="h-24 w-24 rounded-lg object-contain object-center sm:h-32 sm:w-32"/>
            </div>

            <div class="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div>
                    <div class="flex justify-between sm:grid sm:grid-cols-2">
                        <div class="pr-6">
                            <h3 class="text-sm">
                                <a :href="product.href"
                                   class="font-medium text-gray-700 hover:text-gray-800">{{ product.name }}</a>
                            </h3>
                            <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                            <p v-if="product.size" class="mt-1 text-sm text-gray-500">{{ product.size }}</p>
                        </div>

                        <p class="text-right text-sm font-medium text-gray-900">${{ product.price }}/ea</p>
                    </div>

                    <div class="mt-4 flex items-center sm:absolute sm:top-0 sm:left-1/2 sm:mt-0 sm:block">
                        <label :for="`quantity-${productIdx}`" class="sr-only">Quantity, {{ product.name }}</label>
                        <select :id="`quantity-${productIdx}`" :name="`quantity-${productIdx}`"
                                :value="product.qty"
                                class="block max-w-full rounded-md border border-gray-300 py-1.5 text-left text-base font-medium leading-5 text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                            <option value="8">8</option>
                        </select>

                        <button class="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 sm:ml-0 sm:mt-3"
                                type="button" @click.prevent="removeItem(product.id)">
                            <span>Remove</span>
                        </button>
                    </div>
                </div>

                <p class="mt-4 flex space-x-2 text-sm text-gray-700">
                    <CheckIcon v-if="product.inStock" aria-hidden="true" class="h-5 w-5 flex-shrink-0 text-green-500"/>
                    <ClockIcon v-else aria-hidden="true" class="h-5 w-5 flex-shrink-0 text-gray-300"/>
                    <span>{{ product.inStock ? 'In stock' : `Ships in ${product.leadTime}` }}</span>
                </p>
            </div>
        </li>
    </ul>
</template>

<script setup>
import {CheckIcon, ClockIcon} from '@heroicons/vue/20/solid'

const user = useUserStore();

const { cart } = user;
const products = [];

for (const item of cart) {
    let existingProduct = products.find(product => product.id === item.id);

    if (existingProduct) {
        existingProduct.qty = existingProduct.qty + 1;
    } else {
        products.push({
            ...item,
            qty: 1,
            inStock: true,
            imageSrc: `https://lemonseeds.s3.us-east-2.amazonaws.com/${item.img !== '' ? item.img : 'unknown'}`,
        })
    }
}

const removeItem = (productId) => {
    user.cart = cart.filter(product => product.id !== productId);
}
</script>
