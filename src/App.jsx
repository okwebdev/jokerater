import "./App.css";
import { useState } from "react";
import JokeForm from "./JokeForm";

function App() {
  const [jokes, setJokes] = useState([]);

  const handleNewJoke = (text) => {
    const joke = {
      text,
      id: self.crypto.randomUUID(),
    };
    setJokes([joke, ...jokes]);

    console.log(jokes);
  };

  return (
    <>
      <h1>get your joke rated</h1>

      <JokeForm onNewJoke={handleNewJoke} />

      {jokes.map((jokeObj) => (
        <div>
          <h3>{jokeObj.text}</h3>

          <p>rating: {Math.floor(Math.random() * 10)}/10</p>
        </div>
      ))}
    </>
  );
}

export default App;
