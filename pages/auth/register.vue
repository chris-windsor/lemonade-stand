<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Create your account</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <NuxtLink class="font-medium text-indigo-600 hover:text-indigo-500" to="/auth/signin">login to your
                        account
                    </NuxtLink>
                </p>
            </div>
            <form @submit.prevent="submitRegister" class="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true"/>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label class="sr-only" for="name">Name</label>
                        <input id="name" autocomplete="name" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="name" placeholder="Name"
                               required="" type="text" v-model="form.credentials.name"/>
                    </div>
                    <div>
                        <label class="sr-only" for="email-address">Email</label>
                        <input id="email-address" autocomplete="email" class="relative block w-full appearance-none rounded-none border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Email"
                               required="" type="email" v-model="form.credentials.email"/>
                    </div>
                    <div>
                        <label class="sr-only" for="password">Password</label>
                        <input id="password" autocomplete="current-password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="password" placeholder="Password"
                               required="" type="password" v-model="form.credentials.password"/>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="text-sm">
                        <a class="font-medium text-indigo-600 hover:text-indigo-500" href="#">Forgot your password?</a>
                    </div>
                </div>
                <div>
                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                        Create account
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import {LockClosedIcon} from '@heroicons/vue/20/solid'

definePageMeta({
  layout: "store"
})

const router = useRouter();

const form = reactive({
  credentials: {
    name: "Chris Windsor",
    email: "test@chriswindsor.dev",
    password: "123",
    remember: false
  },
  errors: [],
  pending: false,
})

const submitRegister = async () => {
  if (form.pending) return;
  form.pending = true;

  await $fetch('/api/auth/register', {
    method: 'POST',
    body: {
      name: form.credentials.name,
      email: form.credentials.email,
      password: form.credentials.password
    }
  })
  form.pending = false;
  router.push({ path: "/auth/signin" })
}
</script>
