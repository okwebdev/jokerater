import { useState } from "react";
import "./App.css";

export default function JokeForm({ onNewJoke }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onNewJoke(text);
    setText("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">enter your Joke: </label>
      <input
        type="text"
        className="textInput"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <br />
      <button className="submitButton" type="submit">
        submit{" "}
      </button>
    </form>
  );
}
