import { CATEGORIES_URL } from ".";

// fetch category names and their ids from the API
export async function apiFetchCategories() {
	try {
		const response = await fetch(`${CATEGORIES_URL}`);
		if (!response.ok) {
			throw new Error("Error with fetching categories");
		}
		const data = await response.json();
		return [null, data];
	} catch (error) {
		return [error.message, []];
	}
}
