<script setup>
import { useStore } from 'vuex';
import Question from '../components/Question.vue';

const store = useStore()

</script>

<template>
<h1>Questions</h1>
<Question />
</template>

<style scoped>

</style>