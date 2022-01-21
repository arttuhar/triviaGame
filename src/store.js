import {createStore} from 'vuex'

export default createStore({
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

    }
})