<script setup>
import { ref } from "vue";
import store from "../store"
import Alert from "../components/Alert.vue";
import {useRouter} from 'vue-router';

const router = useRouter()
  const user = {
    name:"",
    email:"",
    password:"",
    password_confirmation:""
  }
  const loading = ref(false);
  const errors = ref({});
  function register (ev){
    loading.value = true;
    ev.preventDefault();
    store
    .dispatch("register", user)
    .then(()=>{
      loading.value = false;
      router.push({
        name:"Dashboard"
      })
    }).catch((err)=>{
      loading.value = false;
      if(err.response.status === 422){
        errors.value = err.response.data.errors

      }
    })
  }
</script>

<template>
    
    <div>
        <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for free</h2>
        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form class="space-y-6" @submit="register">
          <Alert v-if="Object.keys(errors).length" class="flex-col items-stretch text-sm">
            <div v-for="(field, i) of Object.keys(errors )" :key="i">
              <div v-for="(error, ind) of errors[field] || []" :key="ind">
              * {{ error }}
              </div>
            </div>
          </Alert>
          <div>
            <label for="fname" class="block text-sm font-medium leading-6 text-gray-900">Full name</label>
            <div class="mt-2">
              <input id="fname" name="fname" v-model="user.name" type="text" autocomplete="fname" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <div class="mt-2">
              <input id="email" name="email" v-model="user.email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            
            </div>
            <div class="mt-2">
              <input id="password" name="password" v-model="user.password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          <div>
            <div class="flex items-center justify-between">
              <label for="password_confirmation" class="block text-sm font-medium leading-6 text-gray-900">Confirm Password</label>
            
            </div>
            <div class="mt-2">
              <input id="password_confirmation" v-model="user.password_confirmation" name="password_confirmation" type="password" autocomplete="current-password_confirmation" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
  
          <div>
            <button :disabled="loading" :class="{'cursor-not-allowed':loading, 'hover:bg-indigo-500': loading}" type="submit" @submit="register" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              <span v-if="loading">

<svg aria-hidden="true" class="w-6 h-6 mr-2  text-gray-400 animate-spin dark:text-gray-600 fill-indigo-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
</svg>
</span>
              Sign up</button>
          </div>
        </form>
  
        <p class="mt-10 text-center text-sm text-gray-500">
          Already a member?
          <router-link :to="{name: 'Login'}" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Login</router-link>
        </p>
      </div>
    </div>
</template>