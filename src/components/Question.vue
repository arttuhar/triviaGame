<script setup>
import { computed, onBeforeMount } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const optionsArray = [];

// Shuffle answers
const shuffleQuestions = () => {
    for (let i = optionsArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [optionsArray[i], optionsArray[j]] = [
            optionsArray[j], optionsArray[i]];
    }
}

const onAnswerClick = () => {
    console.log('clicked');
} 

onBeforeMount(() => {
    const questions = computed(() => store.state.questions);
    optionsArray.push(questions.value[store.state.currentQuestion].correct_answer);
    optionsArray.push(...questions.value[store.state.currentQuestion].incorrect_answers);
    shuffleQuestions();
    console.log(optionsArray)
})
</script>

<template>
    <div class='questionContainer'>
        <div class='question'>
            <h3>{{store.state.questions[store.state.currentQuestion].question}}</h3>
        </div>
        <div class="answerContainer">
            <div class="answerOptions" v-for="item in optionsArray" :key="item">
                <button @click="onAnswerClick">{{item}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>