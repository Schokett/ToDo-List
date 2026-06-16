import "./Checkbox.scss";
function Checkbox({ id, checked, content, handleChangeCheckbox }) {
  return (
    <div className="checkbox-wrapper">
      <input id={id} type="checkbox" checked={checked} onChange={handleChangeCheckbox} />
      <label htmlFor="1">{content}</label>
    </div>
  );
}
export default Checkbox;
