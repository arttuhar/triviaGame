import {createStore} from 'vuex'
import { apiFetchQuestions } from './api/questions'

export default createStore({
    state: {
        username: '',
        difficulty: 'easy',
        category: '9',
        amount: '3',
        questions: [],
        score: '',
        error: ''
    },
    mutations: {
        setUsername: (state, username) => {
            state.username = username
        },
        setDifficulty: (state, difficulty) => {
            state.difficulty = difficulty
        },
        setCategory: (state, category) => {
            state.category = category
        },
        setAmount: (state, amount) => {
            state.amount = amount
        },
        setQuestions: (state, questions) => {
            state.questions = questions
        },
        setScore: (state, score) => {
            state.score = score
        },
        setError: (state, error) => {
            state.error = error
        }
    },
    actions: {
        async fetchQuestions({ commit, state }) {
            const [ error, questions ] = await apiFetchQuestions(state.amount, state.category, state.difficulty)
            if (error !== null ) {
                return error
            }
            commit("setQuestions", questions.results);
            return null;
        }

    }
})