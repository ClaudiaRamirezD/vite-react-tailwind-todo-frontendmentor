import React, { useState } from 'react'

const TodoCreate = ({ createTodo }) => {
  
  const [title, setTitle] = useState('')
  
  const handleSubmitAddTodo = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      return setTitle('');
    }

    createTodo(title);

    setTitle('');

  }

  return (
    // {/* TodoCreate */}
    <form
      onSubmit={handleSubmitAddTodo}
      className=" flex items-center gap-4 overflow-hidden rounded-md bg-white p-4  transition-all duration-700 dark:bg-gray-800"
    >
      <span className="inline-block h-5 w-5 rounded-full border-2 dark:border-gray-700"></span>
      <input
        type="text"
        placeholder="Create a new ToDo..."
        className="w-full text-gray-400 outline-none  transition-all duration-700 dark:bg-gray-800"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
};

export default TodoCreate