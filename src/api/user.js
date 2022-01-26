import { BASE_URL, API_KEY } from ".";

// fetch users from the app specific API
export async function apiFetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error("Could not fetch users.");
    }
    const data = await response.json();
    return [null, data];
  } catch (e) {
    return [e.message, []];
  }
}

// add new user to the API using a POST request, API automatically creates and returns an id
export async function apiAddNewUser(username) {
  try {
    const config = {
      method: "POST",
      headers: {
        "X-API-Key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        highScore: 0,
      }),
    };

    const response = await fetch(`${BASE_URL}`, config);

    if (!response.ok) {
      throw new Error("Could not create a new user.");
    }
    const data = await response.json();
    return [null, data];
  } catch (e) {
    return [e.message, []];
  }
}

// updates the users highScore using a PATCH request
export async function apiUpdateUserScore(userId, score) {
  try {
    const config = {
      method: "PATCH",
      headers: {
        "X-API-Key": API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        highScore: score,
      }),
    };

    const response = await fetch(`${BASE_URL}/${userId}`, config);

    if (!response.ok) {
      throw new Error("Could not update the highscore.");
    }
    const data = await response.json();
    return [null, data];
  } catch (e) {
    return [e.message, []];
  }
}

// deletes user from the API, only for testing purposes if test users need to be removed
export async function apiDeleteUser(userId) {
  try {
    const config = {
      method: "DELETE",
      headers: {
        "X-API-Key": API_KEY,
      },
    };

    const response = await fetch(`${BASE_URL}/${userId}`, config);

    if (!response.ok) {
      throw new Error("Could not delete user.");
    }
    const data = await response.json();
    return [null, data];
  } catch (e) {
    return [e.message, []];
  }
}
