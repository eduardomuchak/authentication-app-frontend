export function fetchIdFromToken() {
  let id: number | undefined;
  const token = sessionStorage.getItem("@Token");

  if (token) {
    const parsedToken = JSON.parse(token);
    id = parsedToken.id;
  }
  return id;
}
