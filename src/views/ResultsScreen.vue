<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { htmlDecode } from "../util/utils.js";

// declare vuex store and vue-router for use in the component
const store = useStore();
const router = useRouter();

// declare a reference to the userAnswers state which contains the questions,
// correct answers and the user's answers
const userAnswers = computed(() => store.state.userAnswers);

// event handler for the 'Replay' button, resets some states and fetches new questions
const onReplayClick = async () => {
  store.commit("setCurrentQuestionIndex", 0);
  store.commit("setScore", 0);
  await store.dispatch("fetchUsers");
  await store.dispatch("fetchQuestions");
  router.replace("/questions");
  store.commit("clearUserAnswers");
};

// event handler for the 'Reset' button, resets all game specific states and
// changes the view back to StartScreen
const onResetClick = () => {
  router.replace("/");
  store.commit("setUsername", "");
  store.commit("setDifficulty", "");
  store.commit("setCategory", "");
  store.commit("setAmount", 5);
  store.commit("setCurrentQuestionIndex", 0);
  store.commit("setScore", 0);
  store.commit("clearUserAnswers");
  store.commit("setUserId", "");
};
</script>

<template>
  <div class="resultsScreen">
    <div class="resultsContainer">
      <div class="totalScore">
        <h3>You scored</h3>
        <h1>{{ store.state.score }}</h1>
        <h3>points</h3>
      </div>
      <div class="result" v-for="item in userAnswers" :key="item">
        <p class="question">{{ htmlDecode(item.question) }}</p>
        <p class="correct">{{ htmlDecode(item.correct_answer) }}</p>
        <p>{{ htmlDecode(item.user_answer) }}</p>
      </div>
      <div class="buttonContainer">
        <div class="resultsButtons">
          <button class="resultButton" @click="onReplayClick">Replay</button>
          <button class="resultButton" @click="onResetClick">Reset</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.resultsScreen {
  display: flex;
  justify-content: center;
  align-items: center;
}
.resultsContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  width: 40%;
  margin: 20px 0;
}
.totalScore {
  text-align: center;
  margin-bottom: 20px;
}
.result {
  margin-bottom: 20px;
  border: 1px dotted #262626;
  padding: 10px;
  width: 100%;
}
.question {
  margin-bottom: 10px;
  font-weight: 400;
}
.correct {
  color: green;
  font-weight: 400;
}
.buttonContainer {
  width: 100%;
}
.resultsButtons {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.resultButton {
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
.resultButton:hover {
  background-color: #00b4d8;
}
</style>