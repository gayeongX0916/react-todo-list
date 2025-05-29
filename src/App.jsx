import "./App.css";

function App() {
  return (
    <div className="todo-list">
    <h1>Todo List</h1>
    <div className="todo-list-container">
      <section className="todo-input">
        <input placeholder="할 일을 입력해주세요." />
        <button>추가</button>
      </section>
      <section className="todo-item">
        <div className="todo-title">할 일</div>
        <li></li>
      </section>
      <section className="todo-check">
        <div className="todo-title">완료된 항목</div>
        <li></li>
      </section>
      </div>
    </div>
  );
}

export default App;
