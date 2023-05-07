<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">New Password</h2>
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
                        <label class="sr-only" for="password">Password</label>
                        <input id="password" autocomplete="email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Password"
                               required="" type="password" v-model="form.credentials.password"/>
                    </div>
                    <div>
                        <label class="sr-only" for="password-confirm">Confirm Password</label>
                        <input id="password-confirm" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="password" placeholder="Confirm Password"
                               required="" type="password" v-model="form.credentials.confirmPassword"/>
                    </div>
                </div>
                <div>
                    <button class="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="submit" :disabled="form.pending">
            <span class="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon aria-hidden="true" class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"/>
            </span>
                        Change
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

const router = useRouter()
const route = useRoute()

const form = reactive({
  credentials: {
    password: "",
    confirmPassword: ""
  },
  errors: [],
  pending: false,
})

const submitRequest = async () => {
  if (form.pending) return;
  form.pending = true;

  if (form.credentials.password !== form.credentials.confirmPassword) {
    form.pending = false;
    form.errors = "Passwords do not match";
    return;
  }

  await $fetch('/api/auth/change_password', {
    method: 'POST',
    body: {
      token: route.query.token,
      password: form.credentials.password,
    }
  }).finally(() => {
    form.pending = false;
  })
  router.push({ path: "/auth/signin" })
}

</script>
