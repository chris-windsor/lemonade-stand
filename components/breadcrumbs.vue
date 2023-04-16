<template>
    <nav aria-label="Breadcrumb" class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ol class="flex items-center space-x-4" role="list">
            <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
                <div class="flex items-center">
                    <a :href="breadcrumb.href" class="mr-4 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
                    <svg aria-hidden="true" class="h-5 w-auto text-gray-300" viewBox="0 0 6 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z" fill="currentColor"/>
                    </svg>
                </div>
            </li>
            <li class="text-sm">
                <a :href="product.href" aria-current="page"
                   class="font-medium text-gray-500 hover:text-gray-600">{{ product.name }}</a>
            </li>
        </ol>
    </nav>
</template>

<script lang="ts" setup>
import {defineProps, PropType} from "vue";
import {Product} from "~/types";

defineProps({
  product: Object as PropType<Product>
})
</script>
