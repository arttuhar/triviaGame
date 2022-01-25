<script setup>
import { computed, onBeforeMount, reactive } from 'vue';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
import { htmlDecode } from '../util/utils.js'

const store = useStore();
const router = useRouter();

const questions = computed(() => store.state.questions);
const currentQuestionIndex = computed(() => store.state.currentQuestionIndex);
const optionsArray = reactive([]);

const onAnswerClick = (event) => {
    checkAnswer(event.target.value);
    if (currentQuestionIndex.value < questions.value.length - 1) {
        store.commit('setCurrentQuestionIndex', currentQuestionIndex.value + 1);
        updateAnswers();
    } else {
        const userId = store.state.userId;
        const currentScore = store.state.score;
        const oldHighScore = store.getters.findUserHighScore;
        if ( currentScore > oldHighScore) {
            store.dispatch("updateUserScore", userId, currentScore);
        }
        router.replace("/results");
    }
}

const checkAnswer = (answer) => {
    const answerObject = {
        question: questions.value[currentQuestionIndex.value].question,
        correct_answer: questions.value[currentQuestionIndex.value].correct_answer,
        user_answer: answer
    }
    store.commit("setUserAnswers", answerObject);
    if (answer === questions.value[currentQuestionIndex.value].correct_answer) {
        store.commit("setScore", store.state.score + 10);
    }
}

onBeforeMount(() => {
    updateAnswers();
})

const updateAnswers = () => {
    while(optionsArray.length > 0) {
        optionsArray.pop();
    }
    optionsArray.push(questions.value[currentQuestionIndex.value].correct_answer);
    optionsArray.push(...questions.value[currentQuestionIndex.value].incorrect_answers)
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
            <h3>{{htmlDecode(store.state.questions[store.state.currentQuestionIndex].question)}}</h3>
        </div>
        <div class="answerContainer">
            <div class="answerOptions" v-for="item in optionsArray" :key="currentQuestionIndex + item">
                <button class="answerButton" :value="item" @click="onAnswerClick">{{htmlDecode(item)}}</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .questionContainer {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: rgb(255, 255, 255,0.8);
        border-radius: 8px;
        padding: 30px;
        box-shadow: 0 10px 20px rgba(0,0,0,0.19), 0 5px 6px rgba(0,0,0,0.23);
        width: 40%;
    }
    .question {
        text-align: center;
        color: #262626;
        margin-bottom: 20px;
    }
    .answerContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
    .answerOptions {
        display: flex;
        justify-content: center;
    }
    .answerButton {
        width: 90%;
        margin: 0 10px 10px 10px;
        height: 35px;
        border: none;
        border-radius: 8px;
        font-size: 14px;
        cursor: pointer;
        background-color: #0096c7;
        color: #fafafa;
    }
    .answerButton:hover {
        background-color: #00b4d8;
    }
</style>