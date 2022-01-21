import { TRIVIA_API_URL } from ".";

export async function apiFetchQuestions(amount, categoryId, difficulty) {
    try {
        const response = await fetch(`${TRIVIA_API_URL}?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`)
        
        if (!response.ok) {
            throw new Error("Could not fetch questions.")
        }

        // const { success, data, error = "Could not fetch questions" } = await response.json()
        // if (!success) {
        //     console.log(data)
        //     console.log('not success')
        //     throw new Error(error)
        // }
        const data = await response.json();
        //console.log(data)
        return [ null, data ]
    }
    catch(e) {
        return [ e.message, []]
    }
}