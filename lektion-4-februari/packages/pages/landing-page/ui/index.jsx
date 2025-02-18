import "./index.css";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { Button } from "@jokeApp/button";
import { useData } from "../data";
import { addJoke } from "@jokeApp/reducers";

function LandingPage() {
  const [quote, setQuote] = useState(null);
  const dispatch = useDispatch();

  const { fetchQuote } = useData();

  async function handleFetchQuote() {
    const quote = await fetchQuote();
    setQuote(quote);
    dispatch(addJoke(quote));
  }

  return (
    <main className="landing-page">
      <h1 className="landing-page__quote">{quote?.value}</h1>
      <Button
        type="regular"
        onClick={() => {
          handleFetchQuote();
        }}
        text="Fetch a quote"
      ></Button>
    </main>
  );
}

export { LandingPage };
