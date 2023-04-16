<template>
    <section aria-labelledby="related-heading" class="mt-16 sm:mt-24">
        <h2 id="related-heading" class="text-lg font-medium text-gray-900">Customers also purchased</h2>

        <div class="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="group relative">
                <div
                        class="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md group-hover:opacity-75 lg:aspect-none lg:h-80">
                    <img :alt="relatedProduct.imageAlt" :src="relatedProduct.imageSrc"
                         class="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </div>
                <div class="mt-4 flex justify-between">
                    <div>
                        <h3 class="text-sm text-gray-700">
                            <a :href="relatedProduct.href">
                                <span aria-hidden="true" class="absolute inset-0"/>
                                {{ relatedProduct.name }}
                            </a>
                        </h3>
                        <p class="mt-1 text-sm text-gray-500">{{ relatedProduct.color }}</p>
                    </div>
                    <p class="text-sm font-medium text-gray-900">{{ relatedProduct.price }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
const relatedProducts = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-02.jpg',
    imageAlt: "Front of men's Basic Tee in white.",
    price: '$35',
    color: 'Aspen White',
  },
  // More products...
]
</script>

<style scoped>

</style>
