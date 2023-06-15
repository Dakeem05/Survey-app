<template>
    <fieldset class="mb-4">
        <div>
            <legend class="text-base font-medium tex-gray-900">
                
            </legend>
        </div>
    </fieldset>
</template>

<script setup>
    import { ref } from 'vue';
    const {question, index, modelValue} = defineProps({
        question:Object,
        index:Number,
        modelValue:[String, Array]
    })
    
    const emits = defineEmits(["update:modelValue"]);
    let model;

    if(question.type === "checkbox"){
        model= ref({})
    }
</script>

<style>

</style>