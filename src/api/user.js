import { BASE_URL, API_KEY } from ".";

export async function apiFetchUsers() {
  try {
    const response = await fetch(`${BASE_URL}`);

    if (!response.ok) {
      throw new Error("Could not fetch users.");
    }
    const data = await response.json();
    console.log(data)
    return [null, data];
  } catch (e) {
    return [e.message, []];
  }
}

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

// for testing purposes
export async function apiDeleteUser(userId) {
    try {
        const config = {
            method: "DELETE",
            headers: {
              "X-API-Key": API_KEY
            }
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
