import Checkbox from "../../../../components/checkbox/Checkbox";
import Button from "../../../../components/button/Button";

//function TodoItem(infoObject)
//console.log(infoObject.weatherData, infoObject.id,infoObject.content) // {temp: 10}, 1, Mannheim
function TodoItem({ todoItem, handleChangeCheckbox }) {
  // { todoItem: {...}, handleChangeCheckbox: ... }
  //function TodoItem({ TodoItem, handleChangeCheckbox }) {

  console.log("TODOITEM", todoItem);
  return (
    //<p>{todoItem.content}</p>
    <div className="HAllo">
      <Checkbox todoItem={todoItem} handleChangeCheckbox={handleChangeCheckbox} />
      <Button />
    </div>
  );
}
export default TodoItem;
