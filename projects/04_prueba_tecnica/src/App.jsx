import React from "react";
import { useCatFact } from "./hooks/useCatFact";
import { useCatImageURL } from "./hooks/useCatImageURL";
import "./App.css";

const WORDS_LIMIT = 5;
const OPTIONS = { size: "50", color: "yellow", limit: WORDS_LIMIT };

const App = () => {
  const { catFact, refreshFact } = useCatFact();
  const { imageURL } = useCatImageURL({
    fact: catFact,
    options: OPTIONS,
  });

  const handleClick = async () => {
    refreshFact();
  };

  return (
    <main className="App">
      <button onClick={handleClick}>Refresh</button>

      <h1>Random cat fact</h1>
      {catFact && <p>{catFact}</p>}
      {imageURL && (
        <img
          src={imageURL}
          alt={`extracted using the ${WORDS_LIMIT} first words from ${catFact}`}
        />
      )}
    </main>
  );
};

export default App;
