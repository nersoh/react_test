export const fetchUser = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`);
  return response.json();
}