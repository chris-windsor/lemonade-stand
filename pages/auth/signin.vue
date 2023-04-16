<template>
    <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="w-full max-w-md space-y-8">
            <div>
                <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your
                    account</h2>
                <p class="mt-2 text-center text-sm text-gray-600">
                    Or
                    {{ ' ' }}
                    <NuxtLink class="font-medium text-indigo-600 hover:text-indigo-500" to="/auth/register">create an
                        account
                    </NuxtLink>
                </p>
            </div>
            <form action="#" class="mt-8 space-y-6" method="POST">
                <input name="remember" type="hidden" value="true"/>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div>
                        <label class="sr-only" for="email-address">Email address</label>
                        <input id="email-address" autocomplete="email" class="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="email" placeholder="Email address"
                               required=""
                               type="email"/>
                    </div>
                    <div>
                        <label class="sr-only" for="password">Password</label>
                        <input id="password" autocomplete="current-password" class="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" name="password" placeholder="Password"
                               required=""
                               type="password"/>
                    </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember-me" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" name="remember-me"
                               type="checkbox"/>
                        <label class="ml-2 block text-sm text-gray-900" for="remember-me">Remember me</label>
                    </div>
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
                        Sign in
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
</script>
