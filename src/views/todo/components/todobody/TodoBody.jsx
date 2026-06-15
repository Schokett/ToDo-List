import TodoItem from "../todoitem/TodoItem";

function TodoBody({ todos, handleChangeCheckbox, deleteTodoItemFromList }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            todoItem={todo}
            handleChangeCheckbox={handleChangeCheckbox}
            deleteTodoItemFromList={deleteTodoItemFromList}
          />
        );
      })}
    </div>
  );
}

export default TodoBody;
