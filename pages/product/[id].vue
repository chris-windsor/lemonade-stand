<template>
    <div class="bg-white">
        <div class="pt-6 pb-16 sm:pb-24">
            <Breadcrumbs :product="product2"/>
            <div class="mx-auto mt-8 max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
                <div class="lg:grid lg:auto-rows-min lg:grid-cols-12 lg:gap-x-8">
                    <div class="lg:col-span-5 lg:col-start-8">
                        <div class="flex justify-between">
                            <h1 class="text-xl font-medium text-gray-900">{{ product.name }}</h1>
                            <p class="text-xl font-medium text-gray-900">${{ product.price }}</p>
                        </div>
                        <div class="mt-4">
                            <h2 class="sr-only">Reviews</h2>
                            <div class="flex items-center">
                                <p class="text-sm text-gray-700">
                                    {{ product.rating }}
                                    <span class="sr-only"> out of 5 stars</span>
                                </p>
                                <div class="ml-1 flex items-center">
                                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                              :class="[product.rating > rating ? 'text-yellow-400' : 'text-gray-200', 'h-5 w-5 flex-shrink-0']"
                                              aria-hidden="true"/>
                                </div>
                                <div aria-hidden="true" class="ml-4 text-sm text-gray-300">·</div>
                                <div class="ml-4 flex">
                                    <a class="text-sm font-medium text-indigo-600 hover:text-indigo-500" href="#">See
                                        all
                                        {{ product.reviewCount }} reviews</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 lg:col-span-7 lg:col-start-1 lg:row-span-3 lg:row-start-1 lg:mt-0">
                        <h2 class="sr-only">Images</h2>

                        <div class="grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-3 lg:gap-8">
                            <img v-for="image in productImages" :key="image.id" :alt="image.imageAlt"
                                 :class="[image.primary ? 'lg:col-span-2 lg:row-span-2' : 'hidden lg:block', 'rounded-lg']"
                                 :src="image.imageSrc"/>
                        </div>
                    </div>
                    <div class="mt-8 lg:col-span-5">
                        <form>
                            <div>
                                <h2 class="text-sm font-medium text-gray-900">Color</h2>
                                <RadioGroup v-model="selectedColor" class="mt-2">
                                    <RadioGroupLabel class="sr-only"> Choose a color</RadioGroupLabel>
                                    <div class="flex items-center space-x-3">
                                        <RadioGroupOption v-for="color in product2.colors" :key="color.name"
                                                          v-slot="{ active, checked }" :value="color"
                                                          as="template">
                                            <div
                                                    :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none']">
                                                <RadioGroupLabel as="span" class="sr-only"> {{
                                                    color.name
                                                    }}
                                                </RadioGroupLabel>
                                                <span :class="[color.bgColor, 'h-8 w-8 border border-black border-opacity-10 rounded-full']"
                                                      aria-hidden="true"/>
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div>
                            <div class="mt-8">
                                <div class="flex items-center justify-between">
                                    <h2 class="text-sm font-medium text-gray-900">Size</h2>
                                    <a class="text-sm font-medium text-indigo-600 hover:text-indigo-500" href="#">See
                                        sizing chart</a>
                                </div>
                                <RadioGroup v-model="selectedSize" class="mt-2">
                                    <RadioGroupLabel class="sr-only"> Choose a size</RadioGroupLabel>
                                    <div class="grid grid-cols-3 gap-3 sm:grid-cols-6">
                                        <RadioGroupOption v-for="size in product2.sizes" :key="size.name"
                                                          v-slot="{ active, checked }"
                                                          :disabled="!size.inStock"
                                                          :value="size" as="template">
                                            <div
                                                    :class="[size.inStock ? 'cursor-pointer focus:outline-none' : 'opacity-25 cursor-not-allowed', active ? 'ring-2 ring-offset-2 ring-indigo-500' : '', checked ? 'bg-indigo-600 border-transparent text-white hover:bg-indigo-700' : 'bg-white border-gray-200 text-gray-900 hover:bg-gray-50', 'border rounded-md py-3 px-3 flex items-center justify-center text-sm font-medium uppercase sm:flex-1']">
                                                <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
                                            </div>
                                        </RadioGroupOption>
                                    </div>
                                </RadioGroup>
                            </div>
                            <button class="mt-8 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                    type="submit">
                                Add to cart
                            </button>
                        </form>
                        <div class="mt-10">
                            <h2 class="text-sm font-medium text-gray-900">Additional Details</h2>

                            <div class="prose prose-sm mt-4 text-gray-500" v-html="product.description"/>
                        </div>
                        <div class="mt-8 border-t border-gray-200 pt-8">
                            <h2 class="text-sm font-medium text-gray-900">Why buy here?</h2>

                            <div class="prose prose-sm mt-4 text-gray-500">
                                <ul role="list">
                                    <li v-for="item in product.details" :key="item">{{ item }}</li>
                                </ul>
                            </div>
                        </div>
                        <section aria-labelledby="policies-heading" class="mt-10">
                            <h2 id="policies-heading" class="sr-only">Our Policies</h2>

                            <dl class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                                <div v-for="policy in policies" :key="policy.name"
                                     class="rounded-lg border border-gray-200 bg-gray-50 p-6 text-center">
                                    <dt>
                                        <component :is="policy.icon" aria-hidden="true"
                                                   class="mx-auto h-6 w-6 flex-shrink-0 text-gray-400"/>
                                        <span class="mt-4 text-sm font-medium text-gray-900">{{ policy.name }}</span>
                                    </dt>
                                    <dd class="mt-1 text-sm text-gray-500">{{ policy.description }}</dd>
                                </div>
                            </dl>
                        </section>
                    </div>
                </div>
                <Reviews/>
                <RelatedProducts/>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue'
import {StarIcon} from '@heroicons/vue/20/solid'
import {RadioGroup, RadioGroupLabel, RadioGroupOption} from '@headlessui/vue'
import {CurrencyDollarIcon, GlobeAmericasIcon} from '@heroicons/vue/24/outline'
import Reviews from "../../components/reviews";
import RelatedProducts from "../../components/relatedProducts";
import Breadcrumbs from "../../components/breadcrumbs";
import {useRetrieve} from "~/composables/useRetrieve";

definePageMeta({
  layout: "store"
})
const route = useRoute();

const productId = route.params.id;
const { data } = await useRetrieve(`/api/product/${productId}`).catch(err => console.error);
const { product } = data?.value || {};
const productImages = [product.img].map((image, imageIndex) => ({
    id: imageIndex,
    primary: imageIndex === 0,
    imageSrc: image ? 'https://lemonseeds.s3.us-east-2.amazonaws.com/' + image : 'https://tailwindui.com/img/ecommerce-images/category-page-04-image-card-01.jpg',
    imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
}));

const product2 = {
  name: 'Basic Tee',
  price: '$35',
  rating: 3.9,
  reviewCount: 512,
  href: '#',
  breadcrumbs: [
    {id: 1, name: 'Women', href: '#'},
    {id: 2, name: 'Clothing', href: '#'},
  ],
  images: [
    {
      id: 1,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-featured-product-shot.jpg',
      imageAlt: "Back of women's Basic Tee in black.",
      primary: true,
    },
    {
      id: 2,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg',
      imageAlt: "Side profile of women's Basic Tee in black.",
      primary: false,
    },
    {
      id: 3,
      imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-02.jpg',
      imageAlt: "Front of women's Basic Tee in black.",
      primary: false,
    },
  ],
  colors: [
    {name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900'},
    {name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400'},
  ],
  sizes: [
    {name: 'XXS', inStock: true},
    {name: 'XS', inStock: true},
    {name: 'S', inStock: true},
    {name: 'M', inStock: true},
    {name: 'L', inStock: true},
    {name: 'XL', inStock: false},
  ],
  description: `
    <p>The Basic tee is an honest new take on a classic. The tee uses super soft, pre-shrunk cotton for true comfort and a dependable fit. They are hand cut and sewn locally, with a special dye technique that gives each tee it's own look.</p>
    <p>Looking to stock your closet? The Basic tee also comes in a 3-pack or 5-pack at a bundle discount.</p>
  `,
  details: [
    'Only the best materials',
    'Ethically and locally made',
    'Pre-washed and pre-shrunk',
    'Machine wash cold with similar colors',
  ],
}
const policies = [
  {name: 'International delivery', icon: GlobeAmericasIcon, description: 'Get your order in 2 years'},
  {name: 'Loyalty rewards', icon: CurrencyDollarIcon, description: "Don't look at other tees"},
]

const selectedColor = ref(product2.colors[0])
const selectedSize = ref(product2.sizes[2])
</script>
