<template>
    <div class="bg-white">
        <div class="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 class="sr-only">Products</h2>

            <div class="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                <NuxtLink v-for="product in products" :key="product.id" :to="{path: `/product/${product.id}`}"
                          class="group">
                    <div class="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                        <img :alt="product.imageAlt" :src="product.imageSrc"
                             class="h-full w-full object-cover object-center group-hover:opacity-75"/>
                    </div>
                    <h3 class="mt-4 text-sm text-gray-700">{{ product.title }}</h3>
                    <p class="mt-1 text-lg font-medium text-gray-900">${{ product.price }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
const {data: productList = []} = await $fetch(`http://127.0.0.1:4567/products?offset=0&limit=5`).catch(err => console.error);

const products = productList.map(product => ({
  ...product,
  imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
  imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
}))
</script>
