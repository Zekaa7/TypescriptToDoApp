import React, { useState } from "react";
import Todo from "../types";
import classes from "./SingleToDo.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";

const SingleToDo: React.FC<{
  getTodo: Todo;
  arrayOfTodo: Todo[];
  onDone: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
}> = ({ getTodo, arrayOfTodo, onDone, onEdit, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(getTodo.text);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const text = e.target.value;
    setNewText(text);
  }

  function handleEdit() {
    setIsEditing(!isEditing);
  }
  function handleSaveEdit(e: React.FormEvent) {
    e.preventDefault();
    onEdit(getTodo.id, newText);
    setIsEditing(false);
  }

  return (
    <form className={classes["todos_single"]} onSubmit={handleSaveEdit}>
      {isEditing ? (
        <input type="text" value={newText} onChange={handleChange} />
      ) : (
        <span className={classes["todos_single-text"]}>{newText}</span>
      )}
      <div>
        <span className={classes.icon}>
          {!getTodo.isDone && <AiFillEdit onClick={handleEdit} />}
        </span>
        <span className={classes.icon}>
          {getTodo.isDone && (
            <AiFillDelete onClick={() => onDelete(getTodo.id)} />
          )}
        </span>
        <span className={classes.icon} onClick={() => onDone(getTodo.id)}>
          {!getTodo.isDone && <MdDone />}
        </span>
      </div>
    </form>
  );
};

export default SingleToDo;
