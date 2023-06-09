import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  add_todo,
  delete_todo,
} from "./rtk/toolkitReducer";
import { fetchTodos } from "./asyncAction/fetchTodos";

function App() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.toolkit.count);
  const todos = useSelector((state) => state.toolkit.todos);

  return (
    <div className="App text-center">
      <h1 className="text-3xl font-bold mb-4">счет: {count} </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold pb-2 pt-1 px-4 rounded mr-2"
        onClick={() => dispatch(increment())}
      >
        добавить
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold pb-2 pt-1 px-4 rounded"
        onClick={() => dispatch(decrement())}
      >
        удалить
      </button>
      <div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-2"
          onClick={() => {
            dispatch(add_todo(prompt("Введите название продукта")));
          }}
        >
          Добавить клиента
        </button>
        <button
          className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-2 rounded mt-5 ml-2"
          onClick={() => dispatch(fetchTodos())}
        >
          Получить клиентов
        </button>
      </div>
      {todos.length <= 0 ? (
        <h1 className="text-2xl mt-4 font-bold">Клиентов нет</h1>
      ) : (
        todos.map((todo) => (
          <div key={todo.id} className="flex items-center justify-center mt-3">
            <p className="mr-2 font-medium italic text-xl">{todo.name}</p>
            <span
              className="text-red-500 cursor-pointer text-2xl font-bold"
              onClick={() => dispatch(delete_todo(todo.id))}
            >
              &times;
            </span>
          </div>
        )).reverse()
      )}
    </div>
  );
}

export default App;
