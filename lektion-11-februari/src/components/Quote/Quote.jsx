import { getRandomQuote } from "../../api/api";
import { use } from "react";

const quotePromise = getRandomQuote();

function Quote() {
  const randomQuote = use(quotePromise);

  return (
    <article>
      <h3>{randomQuote?.value}</h3>
      <img src={randomQuote?.icon_url} />
    </article>
  );
}

export default Quote;
