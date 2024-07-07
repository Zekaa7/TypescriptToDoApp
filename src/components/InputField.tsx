import React, { useRef, useState } from "react";
import classes from "./style.module.css";

type Props = {
  getText: (text: string) => void;
};

const InputField: React.FC<Props> = ({ getText }) => {
  const [getTodo, setGetTodo] = useState("");
  const [error, setError] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const submitFunction = (e: React.FormEvent) => {
    e.preventDefault();
    if (getTodo.trim().length === 0) {
      setError(true);
      return; // Prekinite izvršavanje funkcije
    }

    setError(false);
    getText(getTodo);
    setGetTodo("");
    inputRef.current?.blur();
  };

  const changeInputFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    setGetTodo(text);
  };

  return (
    <form className={classes.input} onSubmit={submitFunction}>
      <input
        type="text"
        name="input"
        className={`${classes.input_box} ${error ? classes.error : ""}`}
        value={getTodo}
        onChange={changeInputFunction}
        ref={inputRef}
        onAnimationEnd={() => setError(false)} // Reset error state after animation ends
      />
      <button
        type="submit"
        className={`${classes.input_submit} ${classes.active}`}
      >
        Go
      </button>
    </form>
  );
};

export default InputField;
