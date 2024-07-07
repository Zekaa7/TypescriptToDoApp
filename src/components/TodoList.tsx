import React from "react";
import SingleToDo from "./SingleToDo";
import Todo from "../types";
import classes from "./style.module.css";

const TodoList: React.FC<{
  todos: Todo[];
  onDone: (id: number) => void;
  onEdit: (id: number, newText: string) => void;
  onDelete: (id: number) => void;
  complited: Todo[];
}> = ({ todos, onDone, onEdit, complited, onDelete }) => {
  return (
    <div className={classes.container}>
      <div className={classes.todos}>
        <span className={classes["todos_heading"]}>Active</span>
        {todos.map((todo) => (
          <SingleToDo
            getTodo={todo}
            key={todo.id}
            arrayOfTodo={todos}
            onDone={onDone}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
      <div className={`${classes.todos} ${classes.remove}`}>
        <span className={classes["todos_heading"]}>Completed Task</span>
        {complited.map((todo) => (
          <SingleToDo
            getTodo={todo}
            key={todo.id}
            arrayOfTodo={todos}
            onDone={onDone}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};
export default TodoList;
