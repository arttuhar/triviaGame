<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const optionsArray = [];

onMounted(() => {
    const questions = computed(() => store.state.questions)
    questions.value.forEach(item => optionsArray.push(item.correct_answer))
    questions.value.forEach(item => optionsArray.push(...item.incorrect_answers))
    console.log(optionsArray)
})

// v-for="item in questionsObject" :key="item.correct_answer">{{ item.correct_answer }}
</script>

<template>
    <div class="answerContainer">
        <div class="answerOptions">
            <button>answer</button>
        </div>
    </div>
</template>

<style scoped>

</style>