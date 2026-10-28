export async function api(path, options = {}) {
  const base = (import.meta.env.VITE_API_BASE_URL || '/api').replace(/\/$/, '');
  const response = await fetch(`${base}${path}`, {
    ...options,
    headers: { 'Content-Type': 'application/json', ...options.headers },
  });
  const payload = await response.json();
  if (!response.ok) throw new Error(payload.message || 'Please try again later.');
  return payload;
}
