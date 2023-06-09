export const fetchTodos = () => {
  return function (dispatch) {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => dispatch({ type: "GET_ALL_TODO", payload: res }));
  };
};
