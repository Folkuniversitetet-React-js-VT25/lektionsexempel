export const useData = () => {
  return {
    async fetchQuote() {
      try {
        const URL = "https://api.chucknorris.io/jokes/random";
        const resp = await fetch(URL);
        return await resp.json();
      } catch (error) {
        console.error(error);
      }
    },
  };
};
