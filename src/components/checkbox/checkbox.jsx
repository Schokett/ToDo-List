import "./Checkbox.scss";
function Checkbox({ todoItem, handleChangeCheckbox }) {
  return (
    <div>
      <input
        id={todoItem.id}
        type="checkbox"
        checked={todoItem.done}
        onChange={handleChangeCheckbox}
      />
      <label for="1">{todoItem.content}</label>
    </div>
  );
}
export default Checkbox;
