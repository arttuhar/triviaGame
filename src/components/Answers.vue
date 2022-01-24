<script setup>
import { computed, onMounted } from 'vue';
import { useStore } from 'vuex';

const store = useStore();

const optionsArray = [];

const answers = computed(() => store.state.questions.correct_answer);
console.log(answers);

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