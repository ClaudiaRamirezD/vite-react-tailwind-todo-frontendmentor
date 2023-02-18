
import TodoItem from './TodoItem';

const TodoList = ({ todos, removeTodo, updateTodo }) => {

  return (
    // {/* TodoList (TodoItem) TodoUpdate & TodoDelete*/}
    <div className="mt-5 rounded-t-md bg-white overflow-hidden">
      {/* //En vez de que a cada article se le agregue el padding se le puede poner de esta forma al padre [&>article]:p-4 */}
      {todos.map((todo) => (
         <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} updateTodo={updateTodo} />
      ))}
    </div>
  );
};
  
export default TodoList;