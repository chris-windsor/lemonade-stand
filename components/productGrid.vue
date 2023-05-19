<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <NuxtLink v-for="product in productList" :key="product.id" :to="{path: `/product/${product.id}`}"
                          class="group">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img :alt="product.imageAlt" :src="product.imageSrc"
                             class="h-full w-full object-contain object-center group-hover:opacity-75 mix-blend-multiply"/>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{{ product.name }}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import {useRetrieve} from "~/composables/useRetrieve";

const { data } = await useRetrieve(`/api/products?offset=0&limit=5`).catch(err => console.error);
const { products = [], pageCount = 0 } = data?.value || {};

const productList = products.map(product => ({
  ...product,
  imageSrc: `https://lemonseeds.s3.us-east-2.amazonaws.com/${product.img !== '' ? product.img : 'unknown'}`,
  imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
}))
</script>
