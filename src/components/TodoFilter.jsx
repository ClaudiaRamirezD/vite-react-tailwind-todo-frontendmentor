

const TodoFilter = ({changeFilter, filter}) => {
  return (
    // {/* TodoFilter */}
    <section className="container mx-auto mt-5">
      <div className="flex justify-center gap-4 rounded-md bg-white">
        <button
          className={`${
            filter === "all"
              ? " hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("all")}
        >
          All
        </button>
        <button
          className={`${
            filter === "active"
              ? " hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("active")}
        >
          Active
        </button>
        <button
          className={`${
            filter === "completed"
              ? " hover:text-gray-400"
              : "text-gray-400 hover:text-blue-500"
          }`}
          onClick={() => changeFilter("completed")}
        >
          Completed
        </button>
      </div>
    </section>
  );
}

export default TodoFilter