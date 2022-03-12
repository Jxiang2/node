const BASE_URL = "http://localhost:8000";

async function httpGetPlanets () {
  // Load planets and return as JSON.
  const response = await fetch(`${BASE_URL}/planets`);
  return await response.json();
}

async function httpGetLaunches () {
  // Load launches, sort by flight number, and return as JSON.
  const response = await fetch(`${BASE_URL}/launches`);
  const fetched = await response.json();
  return fetched.sort((a, b) => {
    return a.flightNumber - b.flightNumber;
  });
}

async function httpSubmitLaunch (launch) {
  // Submit given launch data to launch system.

  try {
    return await fetch(`${BASE_URL}/launches`, {
      method: "post",
      body: JSON.stringify(launch),
      headers: {
        "Content-Type": "application/json"
      }
    });
  } catch (error) {
    return {
      ok: false
    };
  }
}

async function httpAbortLaunch (id) {
  // TODO: Once API is ready.
  // Delete launch with given ID.
}

export {
  httpGetPlanets,
  httpGetLaunches,
  httpSubmitLaunch,
  httpAbortLaunch,
};