import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import axios from "axios";
import "./joke.css";
const Jokes = () => {
  const [jokes, setJokes] = useState([]);

  const url = "https://api.jokes.one/jod?category=animal";
  useEffect(() => {
    const jokes = async () => {
      const res = await axios.get(url);
      setJokes(res.data.contents.jokes);
    };

    jokes();
  }, []);

  console.log(jokes[0]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Jokes</h1>
      <div className="jokes">
        {jokes.map((joke) => (
          <div className="jokeWrapper">
            <div className="jokesContent">
              <span>{joke.date}</span>
              <span>{joke.description}</span>
              <span>{joke.joke.text}</span>
            </div>
            <div className="jokesContent">
              <span>{joke.date}</span>
              <span>{joke.description}</span>
              <span>{joke.joke.text}</span>
            </div>
            <div className="jokesContent">
              <span>{joke.date}</span>
              <span>{joke.description}</span>
              <span>{joke.joke.text}</span>
            </div>
            <div className="jokesContent">
              <span>{joke.date}</span>
              <span>{joke.description}</span>
              <span>{joke.joke.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jokes;
