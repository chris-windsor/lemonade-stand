<template>
    <div class="bg-white">
        <div class="mx-auto max-w-md py-8 sm:py-10 px-6 lg:px-8">
            <form @submit.prevent="submitFileUpload" class="mt-8 space-y-6" method="POST">
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label class="sr-only" for="product-image">Product Name</label>
                        <input class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               type="file" id="product-image" name="product-image" @change="selectFile" multiple>
                    </div>
                </div>
                <div>
                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit" :disabled="form.pending">
                <span class="absolute inset-y-0 left-0 flex items-center pl-3">
                  <ArrowUpLeftIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
                </span>
                        Upload Image
                    </button>
                </div>
            </form>
            <div v-for="file in fileUpload.filePreviews">
                <img :src="'https://lemonseeds.s3.us-east-2.amazonaws.com/' + file" alt="">
            </div>
            <form @submit.prevent="submitForm" class="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true"/>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label class="sr-only" for="product-name">Product Name</label>
                        <input id="product-name"
                               class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               name="product-name" placeholder="Name"
                               required="" type="text" v-model="form.newProduct.name"/>
                    </div>
                    <div>
                        <label class="sr-only" for="product-price">Product Price</label>
                        <input id="product-price"
                               class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               name="product-price" placeholder="Price"
                               required="" type="number" v-model="form.newProduct.price"/>
                    </div>
                    <div>
                        <label class="sr-only" for="product-stock">Product Stock</label>
                        <input id="product-stock"
                               class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                               name="product-stock" placeholder="Stock"
                               required="" type="number" v-model="form.newProduct.stock"/>
                    </div>
                </div>
                <div>
                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit" :disabled="form.pending">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <TableCellsIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                        Create Product
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {ArrowUpLeftIcon, TableCellsIcon} from '@heroicons/vue/20/solid'
import {useUserStore} from "~/stores/user";

definePageMeta({
  layout: "admin",
})

const userStore = useUserStore()

const fileUpload = reactive({
  selectedFiles: undefined,
  filePreviews: []
})

const form = reactive({
  newProduct: {
    id: "",
    name: "",
    description: "",
    price: 0,
    stock: 0
  },
  errors: [],
  pending: false,
})

const selectFile = (event) => {
  fileUpload.selectedFiles = event.target.files
}

const submitFileUpload = async () => {
  const formData = new FormData();

  for (let i = 0; i < fileUpload.selectedFiles.length; i++) {
    formData.append('files[]', fileUpload.selectedFiles[i]);
  }

  const files_resp = await $fetch('/api/upload_file', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${userStore.token}`
    },
    body: formData
  })

  fileUpload.filePreviews = files_resp.data.files;
}

const submitForm = async () => {
  if (form.pending) return;
  form.pending = true;

  await $fetch('/api/product', {
    method: 'POST',
    headers: {
      authorization: `Bearer ${userStore.token}`
    },
    body: {
      ...form.newProduct,
      image_id: fileUpload.filePreviews[0]
    }
  }).finally(() => {
    form.pending = false;
  })
}

</script>
