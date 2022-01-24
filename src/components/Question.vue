<script setup>
import { computed, onBeforeMount, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const optionsArray = [];

const onAnswerClick = () => {
    console.log('clicked');
} 

onBeforeMount(() => {
    const questions = computed(() => store.state.questions);
    //questions.value.forEach(item => optionsArray.push(item.correct_answer))
    optionsArray.push(questions.value[store.state.currentQuestion].correct_answer);
    //questions.value.forEach(item => optionsArray.push(...item.incorrect_answers))
    optionsArray.push(...questions.value[store.state.currentQuestion].incorrect_answers);

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