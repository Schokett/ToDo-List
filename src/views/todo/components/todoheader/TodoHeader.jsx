import Input from "../../../../components/input/input";
import Button from "../../../../components/button/Button";
import { useState } from "react";
import "./TodoHeader.scss";

function TodoHeader({ addTodoItemToList }) {
  const [inputValue, setInputValue] = useState("");

  function handleInputChangeEvent(event) {
    setInputValue(event.target.value);
  }
  function handleAddTodoItemEvent() {
    addTodoItemToList({ id: Math.random(), content: inputValue, done: false });
    setInputValue("");
  }
  return (
    <div className="header-conatiner">
      <Input inputValue={inputValue} handleInputChangeEvent={handleInputChangeEvent} />
      <Button buttonValue={"Add"} handleButtonClickEvent={handleAddTodoItemEvent} />
    </div>
  );
}
export default TodoHeader;
