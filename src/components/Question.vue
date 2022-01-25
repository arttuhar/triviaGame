<script setup>
import { computed, onBeforeMount, reactive } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const questions = computed(() => store.state.questions);
const currentQuestion = computed(() => store.state.currentQuestion);
const optionsArray = reactive([]);

const onAnswerClick = () => {
    store.commit('setCurrentQuestion', store.state.currentQuestion + 1);
    updateAnswers();
} 

onBeforeMount(() => {
    updateAnswers();
})

const updateAnswers = () => {
    while(optionsArray.length > 0) {
        optionsArray.pop();
    }
    optionsArray.push(questions.value[store.state.currentQuestion].correct_answer);
    optionsArray.push(...questions.value[store.state.currentQuestion].incorrect_answers)
    shuffleQuestions();
}

// Shuffle answers
const shuffleQuestions = () => {
    for (let i = optionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsArray[i], optionsArray[j]] = [
            optionsArray[j], optionsArray[i]];
    }
}
</script>

<template>
    <div class='questionContainer'>
        <div class='question'>
            <h3>{{store.state.questions[store.state.currentQuestion].question}}</h3>
        </div>
        <div class="answerContainer">
            <div class="answerOptions" v-for="item in optionsArray" :key="currentQuestion + item">
                <button @click="onAnswerClick">{{item}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>