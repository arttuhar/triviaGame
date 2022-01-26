<script setup>
import Question from "../components/Question.vue";
</script>

<template>
  <div class="questionScreen">
    <Question />
  </div>
</template>

<style scoped>
.questionScreen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #0077b6;
}
</style>