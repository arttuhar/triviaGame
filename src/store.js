import { createStore } from "vuex";
import { apiFetchCategories } from "./api/categories";
import { apiFetchQuestions } from "./api/questions";
import {
  apiFetchUsers,
  apiAddNewUser,
  apiUpdateUserScore,
  apiDeleteUser,
} from "./api/user";

// vuex store configuration for the app
export default createStore({
  state: {
    username: "",
    difficulty: "",
    category: "",
    categories: [],
    amount: 5,
    questions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    score: 0,
    userId: "",
    users: [],
  },
  mutations: {
    setUsername: (state, username) => {
      state.username = username;
    },
    setDifficulty: (state, difficulty) => {
      state.difficulty = difficulty;
    },
    setCategory: (state, category) => {
      state.category = category;
    },
    setCategories: (state, categories) => {
      state.categories = categories;
    },
    setAmount: (state, amount) => {
      state.amount = amount;
    },
    setQuestions: (state, questions) => {
      state.questions = questions;
    },
    setCurrentQuestionIndex: (state, currentQuestionIndex) => {
      state.currentQuestionIndex = currentQuestionIndex;
    },
    setUserAnswers: (state, answer) => {
      state.userAnswers.push(answer);
    },
    clearUserAnswers: (state) => {
      state.userAnswers = [];
    },
    setScore: (state, score) => {
      state.score = score;
    },
    setUserId: (state, id) => {
      state.userId = id;
    },
    setUsers: (state, users) => {
      state.users = users;
    },
  },
  getters: {
    findUserByUsername: (state) => {
      return state.users.find((user) => user.username === state.username);
    },
    findUserHighScore: (state) => {
      const user = state.users.find((user) => user.id === state.userId);
      return user.highScore;
    },
  },
  actions: {
    async fetchQuestions({ commit, state }) {
      const [error, questions] = await apiFetchQuestions(
        state.amount,
        state.category,
        state.difficulty
      );
      if (error !== null) {
        return error;
      }
      commit("setQuestions", questions.results);
      return null;
    },
    async fetchCategories({ commit, state }) {
      const [error, categories] = await apiFetchCategories();
      if (error !== null) {
        return error;
      }
      commit("setCategories", categories.trivia_categories);
      return null;
    },
    async fetchUsers({ commit }) {
      const [error, users] = await apiFetchUsers();
      if (error !== null) {
        return error;
      }
      commit("setUsers", users);
      return null;
    },
    async addNewUser({ commit, state }) {
      const [error, user] = await apiAddNewUser(state.username);
      if (error !== null) {
        return error;
      }
      commit("setUserId", user.id);
      return null;
    },
    async updateUserScore({ commit, state }) {
      const [error, user] = await apiUpdateUserScore(state.userId, state.score);
      if (error !== null) {
        return error;
      }
      return null;
    },
	// action not used in the app, only for testing purposes
    async deleteUser({ commit }, userId) {
      const [error, user] = await apiDeleteUser(userId);
      if (error !== null) {
        return error;
      }
      return null;
    },
  },
});
