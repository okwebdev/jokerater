import { useState } from "react";

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
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">submit </button>
    </form>
  );
}
