
const TodoComputed = ({countLeft, clearCompleted}) => {
  return (
    // {/* TodoComputed */}
    <section className="flex justify-between rounded-b-md bg-white p-4">
      <span className="text-gray-400"> {countLeft} items left</span>
      <button className="text-gray-400" onClick={clearCompleted}>
        Clear Completed
      </button>
    </section>
  );
}

export default TodoComputed