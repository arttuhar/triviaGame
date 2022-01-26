<script setup>
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

// declare vuex store and vue-router for use in the component
const store = useStore();
const router = useRouter();

// declare variables used by the template
const username = ref("");
const amount = ref(5);
const difficulty = ref("");
const category = ref("");
const toggleOptions = ref(false);

// declare a reference to the users state
const users = computed(() => store.state.users);

// upon pressing the 'Start' button, update the store states and switch to the QuestionScreen route
const onStartClick = async () => {
  store.commit("setUsername", username.value);
  store.commit("setAmount", amount.value);
  store.commit("setDifficulty", difficulty.value);
  store.commit("setCategory", category.value);
  const user = store.getters.findUserByUsername;
  // if the API didn't have a user with the same username, create a new one
  if (!user) {
    await store.dispatch("addNewUser");
    await store.dispatch("fetchUsers");
  } else {
    store.commit("setUserId", user.id);
  }
  // fetch appropriate questions depending on user input
  await store.dispatch("fetchQuestions");
  router.replace("/questions");
};

// fetch the category and user data from the APIs when the component is mounted
onMounted(async () => {
  await store.dispatch("fetchCategories");
  await store.dispatch("fetchUsers");
});
</script>

<template>
  <div class="startScreen">
    <div class="startInputs">
      <input
        type="text"
        class="startInput"
        placeholder="Player name"
        v-model="username"
      />
      <button @click="onStartClick" class="startButton">Start</button>
      <button @click="toggleOptions = !toggleOptions" class="optionsButton">
        Options
      </button>
      <div v-show="toggleOptions" class="options">
        <select class="option" v-model="difficulty">
          <option disabled value="">Difficulty</option>
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input type="number" class="option" v-model="amount" min="1" max="50" />
        <div>
          <p class="invalidValue" v-show="amount < 1">Select min 1 question</p>
          <p class="invalidValue" v-show="amount > 50">
            Select max 50 questions
          </p>
        </div>
        <select v-model="category" class="option">
          <option disabled value="">Category</option>
          <option
            v-for="item in store.state.categories"
            :key="item.id"
            :value="item.id"
          >
            {{ item.name }}
          </option>
        </select>
      </div>
    </div>
  </div>
</template>

<style scoped>
.startScreen {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.startInputs {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(255, 255, 255, 0.8);
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 5px 6px rgba(0, 0, 0, 0.23);
  width: 40%;
}
.startInput {
  width: 100%;
  height: 40px;
  margin: 20px;
  border-radius: 8px;
  border: none;
  font-size: 20px;
  padding: 10px 15px;
  text-align: center;
}
.startInput:focus {
  outline: none;
}
.startButton {
  width: 90%;
  margin: 0 20px 20px 20px;
  height: 35px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  cursor: pointer;
  background-color: #0096c7;
  color: #fafafa;
}
.startButton:hover {
  background-color: #00b4d8;
}
.optionsButton {
  border: none;
  background-color: transparent;
  cursor: pointer;
}
.options {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}
.option {
  width: 60%;
  height: 25px;
  margin: 10px;
  padding-left: 5px;
  font-family: sans-serif;
}
.option:focus {
  outline: none;
}
.invalidValue {
  color: red;
  font-size: 13px;
  text-align: center;
}
</style>