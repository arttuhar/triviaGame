import { TRIVIA_API_URL } from ".";

export async function fetchQuestions(amount, categoryId, difficulty) {
    try {
        const response = fetch(`${TRIVIA_API_URL}?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`)
        
        if (!response.ok) {
            throw new Error("Could not fetch questions.")
        }

        const { success, data, error = "Could not fetch questions" } = await response.json()
        if (!success) {
            throw new Error(error)
        }
        return [ null, data ]
    }
    catch(e) {
        return [ e.message, []]
    }
}