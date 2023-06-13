<template>
  <PageComponent >
   <template v-slot:header>
    <div class="flex justify-between items-center">
      <h1 class="text-3xl font-bold tracking-tight text-gray-900">Surveys</h1>
      <router-link class="py-2 px-3 text-white bg-emerald-500 rounded-md hover:bg-emerald-600" :to="{name: 'SurveyCreate'}">
        <span class="w-10 h-10">+</span> Add survey
      </router-link>
    </div>   
    </template>
    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-col-3">
      <div v-for="survey in surveys" :key="survey.id" class="flex flex-col py-4 px 6 shadow-md bg-white hover:bg-gray-50:h-[470px]">
      <img :src="survey.image" :alt="survey.title" class="w-full h-48 object-contain">
      <h4 class="mt-4 text-lg font-bold">{{ survey.bold }}</h4>
      <div v-html="survey.description" class="overflow-hidden flex-1"></div>
      <div class="flex justify-between items-center mt-3">
        <router-link :to="{name:'SurveyView', params: {id:survey.id}}" class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg class="feather feather-edit" fill="none" height="14" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
          Edit
        </router-link>
        <button type="button" @click="deleteSurvey(survey)" class="h-8 w-8 flex items-center justify-center rounded-full border border-transparent text-sm text-red-500 focus:ring-2 focus:ring-offdet-2 focus:ring-red-500">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" enable-background="new 0 0 55 55" viewBox="0 0 55 55" id="Trash"><path d="M43.19,7.97h-8.42V5.51c0-1.66-1.35-3.01-3.01-3.01h-8.52c-1.66,0-3.01,1.35-3.01,3.01v2.46h-8.42
		c-2.32,0-4.22,1.89-4.22,4.22v4.14c0,0.55,0.45,1,1,1h2.09v30.96c0,2.33,1.89,4.22,4.21,4.22H40.1c2.33,0,4.22-1.89,4.22-4.22
		V17.32h2.09c0.55,0,1-0.45,1-1v-4.14C47.41,9.86,45.52,7.97,43.19,7.97z M22.23,5.51c0-0.56,0.45-1.01,1.01-1.01h8.52
		c0.56,0,1.01,0.45,1.01,1.01v2.46H22.23V5.51z M42.32,48.28c0,1.23-0.99,2.22-2.22,2.22H14.89c-1.22,0-2.21-0.99-2.21-2.22V17.32
		h29.64V48.28z M45.41,15.32H9.59v-3.14c0-1.22,0.99-2.22,2.22-2.22h31.39c1.22,0,2.22,0.99,2.22,2.22V15.32z" fill="#d85b53" class="color000000 svgShape"></path><path d="M30.77 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C29.77 46.05 30.22 46.5 30.77 46.5zM24.23 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C23.23 46.05 23.67 46.5 24.23 46.5zM37.32 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C36.32 46.05 36.77 46.5 37.32 46.5zM17.68 46.5c.55 0 1-.45 1-1V22.32c0-.55-.45-1-1-1s-1 .45-1 1V45.5C16.68 46.05 17.13 46.5 17.68 46.5z" fill="#d85b53" class="color000000 svgShape"></path></svg></button>
        
      </div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
    import PageComponent from '../components/PageComponent.vue';
    import store from '../store';
    import { computed } from 'vue';

    const surveys = computed(()=>store.state.surveys)
    function deleteSurvey (survey){
      if(confirm(`Are you sure you want to delete this survey? Operation cannot be undone `)){

      }
    }
</script>