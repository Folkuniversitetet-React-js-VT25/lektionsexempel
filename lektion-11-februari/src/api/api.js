export async function getRandomQuote() {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  return response.json();
}
