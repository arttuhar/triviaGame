<script setup>

import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore()

onMounted(async () => {
    store.dispatch("fetchQuestions")
})

const questions = computed(() => store.state.questions)

</script>

<template>

<h1>Questions</h1>
<ul>
    <li v-for="item in questions" :key="item.question">{{item.question}}</li>
</ul>

</template>

<style scoped>

</style>