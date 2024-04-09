import "./App.css";
import { useState } from "react";
import JokeForm from "./JokeForm";
import background from "../public/flux background.svg";

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
      <h1>get your joke rated 😃</h1>

      <JokeForm onNewJoke={handleNewJoke} />

      {jokes.map((jokeObj) => (
        <div className="jokeContainer">
          <p>your joke:</p>
          <h3 className="jokeDisplay">{jokeObj.text}</h3>

          <p>rating: {Math.floor(Math.random() * 10)}/10</p>
        </div>
      ))}
    </>
  );
}

export default App;
