import TodoItem from "../todoitem/TodoItem";
import "./TodoBody.scss";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  function showNoTodoItems() {
    if (todos.length === 0) {
      return <p>Keine Todo's vorhanden</p>;
    }
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todoItem={todo}
            key={todo.id}
            handleChangeCheckbox={handleChangeCheckbox}
            deleteTodoItemFromList={deleteTodoItemFromList}
          />
        );
      })}
      <div className="no-todos-container">{showNoTodoItems()}</div>
    </div>
  );
}

export default TodoBody;
