import React from "react";
import Checked from "./icons/Checked";
import CrossIcon from "./icons/CrossIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
  const { id, title, completed } = todo;

  return (
    <article className="flex items-center gap-4 border-b border-b-gray-300 py-4 px-4 dark:bg-gray-800 transition-all duration-700 ">
      <button
        className={`h-5 w-5 rounded-full border-2 dark:border-gray-700 ${
          completed
            ? "flex rotate-45 items-center justify-center bg-gradient-to-r from-blue-500 via-purple-800 to-pink-500"
            : "inline-block"
        }`}
        onClick={() => updateTodo(id)}
      >
        {completed && <Checked className="-rotate-45" />}
      </button>
      <p
        className={`grow font-medium text-gray-600 dark:text-purple-200 ${
          completed && "line-through"
        }`}
      >
        {" "}
        {title}{" "}
      </p>
      <button onClick={() => removeTodo(id)}>
        <CrossIcon />
      </button>
    </article>
  );
};

export default TodoItem;
