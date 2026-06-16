import TodoItem from "./components/todoitem/TodoItem";
import TodoHeader from "./components/todoheader/TodoHeader";
import TodoBody from "./components/todobody/TodoBody";
import TodoList from "./components/todolist/TodoList";
import "./Todo.scss";

function TodoKomponente() {
  return (
    <div className="Todo-Container">
      <TodoList />
    </div>
  );
}
export default TodoKomponente;
