import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        username: '',
        difficulty: '',
        category: '',
        amount: '',
        questions: [],
        score: '',
        error: ''
    },
    mutations: {
        setUsername: (state, payload) => {
            state.username = payload
        },
        setDifficulty: (state, payload) => {
            state.difficulty = payload
        },
        setCategory: (state, payload) => {
            state.category = payload
        },
        setAmount: (state, payload) => {
            state.amount = payload
        },
        setQuestions: (state, payload) => {
            state.questions = payload
        },
        setScore: (state, payload) => {
            state.score = payload
        },
        setError: (state, payload) => {
            state.error = payload
        }
    },
    getters: {

    },
    actions: {
        
    }
})