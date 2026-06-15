import { useState } from "react";
import TodoItem from "./components/todoitem/TodoItem";

function TodoKomponente() {
  const [todos, setTodos] = useState([{ id: Math.random(), content: "Waschen", done: false }]);

  function handleChangeCheckbox(todoItem) {
    const todoItemIndex = todos.findIndex((todo) => todo.id === todoItem.id);
    const updatedTodos = [...todos];
    updatedTodos.splice(todoItemIndex, 1, todoItem);
    setTodos(updatedTodos);
  }
  return (
    <div className="Test">
      {todos.map((todo) => {
        console.log("TODO", todo);
        return <TodoItem todoItem={todo} handleChangeCheckbox={handleChangeCheckbox} />;
        //return TodoItem({ todoItem: todo, handleChangeCheckbox: handleChangeCheckbox });
      })}
    </div>
  );
}
export default TodoKomponente;
