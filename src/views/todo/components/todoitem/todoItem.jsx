import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";

function TodoItem({ todoItem, handleChangeCheckbox, deleteTodoItemFromList }) {
  function handleDeleteTodoItem() {
    deleteTodoItemFromList(todoItem.id);
  }
  function handleChangeCheckboxEvent(event) {
    const updatedTodoItem = { ...todoItem };
    updatedTodoItem.done = event.target.checked;
    handleChangeCheckbox(updatedTodoItem);
  }
  return (
    <div>
      <Checkbox
        id={todoItem.id}
        checked={todoItem.done}
        content={todoItem.content}
        handleChangeCheckbox={handleChangeCheckboxEvent}
      />
      <Button buttonValue={"Löschen"} handleButtonClickEvent={handleDeleteTodoItem} />
    </div>
  );
}
export default TodoItem;
