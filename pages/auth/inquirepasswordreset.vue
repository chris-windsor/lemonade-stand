<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Password Reset</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <NuxtLink class="font-medium text-indigo-600 hover:text-indigo-500" to="/auth/register">create an
                        account
                    </NuxtLink>
                </p>
            </div>
            <form @submit.prevent="submitRequest" class="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true"/>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label class="sr-only" for="email-address">Email address</label>
                        <input id="email-address" autocomplete="email" class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Email address"
                               required="" type="email" v-model="form.credentials.email"/>
                    </div>
                </div>
                <div>
                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit" :disabled="form.pending">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <EnvelopeIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                        Request
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {EnvelopeIcon} from '@heroicons/vue/20/solid'

definePageMeta({
  layout: "store"
})

const form = reactive({
  credentials: {
    email: "test@chriswindsor.dev",
  },
  errors: [],
  pending: false,
})

const submitRequest = async () => {
  if (form.pending) return;
  form.pending = true;

  await $fetch('/api/auth/inquire_password_reset', {
    method: 'POST',
    body: {
      email: form.credentials.email,
    }
  }).finally(() => {
      form.pending = false;
  })
}

</script>
