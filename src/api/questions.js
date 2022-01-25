import { TRIVIA_API_URL } from ".";

export async function apiFetchQuestions(amount, categoryId, difficulty) {
	try {
		const response = await fetch(
			`${TRIVIA_API_URL}?amount=${amount}&category=${categoryId}&difficulty=${difficulty}`
		);

		if (!response.ok) {
			throw new Error("Could not fetch questions.");
		}
		const data = await response.json();
		return [null, data];
	} catch (e) {
		return [e.message, []];
	}
}
