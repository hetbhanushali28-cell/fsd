const API_URL = "http://localhost:5000/api";

// Event API calls
export const fetchEvents = async () => {
  const response = await fetch(`${API_URL}/events`);
  const data = await response.json();
  return data;
};

export const fetchEventById = async (id) => {
  const response = await fetch(`${API_URL}/events/${id}`);
  const data = await response.json();
  return data;
};

export const createEvent = async (eventData) => {
  const response = await fetch(`${API_URL}/events`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  const data = await response.json();
  return data;
};

export const updateEvent = async (id, eventData) => {
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(eventData),
  });
  const data = await response.json();
  return data;
};

export const deleteEvent = async (id) => {
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

// Auth API calls
export const loginAPI = async (email, password) => {
  const response = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  const data = await response.json();
  return { data, ok: response.ok };
};

export const registerAPI = async (name, email, password) => {
  const response = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await response.json();
  return { data, ok: response.ok };
};
