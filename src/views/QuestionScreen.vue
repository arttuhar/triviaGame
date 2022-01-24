<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';
import Answers from '../components/Answers.vue';

const store = useStore()

const questions = computed(() => store.state.questions);

</script>

<template>

<h1>Questions</h1>
<ul>
    <li v-for="item in questions" :key="item.question">{{item.question}}</li>
</ul>
<Answers />

</template>

<style scoped>

</style>