const API_BASE = import.meta.env.VITE_API_BASE || "http://localhost:5000/api";

export async function api(path, method = "GET", body = null, token = null) {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : null,
  });

  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}
