import "./Button.scss";
function Button({ buttonValue, handleButtonClickEvent }) {
  return <button onClick={handleButtonClickEvent}>{buttonValue}</button>;
}
export default Button;
