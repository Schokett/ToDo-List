import logo from "./logo.svg";
import "./App.scss";

function App() {
  return (
    <div className="todo">
      <div className="todo__action-container line">
        <input type="text" className="todo__input" />
        <button className="todo__add-btn">Add</button>
      </div>
      <div className="todo__todo-list-conatiner line">
        <div className="todo__card-container">
          <div className="todo__card">
            <input type="checkbox" className="todo__input-checkbox"></input>
            <p className="todo__title">Test</p>
            <button className="todo__delete-btn">Löschen</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
