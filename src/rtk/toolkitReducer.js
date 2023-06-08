import { createAction, createReducer } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  count: 0,
  todos: [],
};

export const increment = createAction("INCREMENT");
export const decrement = createAction("DECREMENT");
export const add_todo = createAction("ADD_TODOS");
export const delete_todo = createAction("DELETE_TODO");
export const get_all_todos = createAction("GET_ALL_TODO");

export default createReducer(initialState, {
  [increment]: function (state) {
    state.count = state.count + 1;
  },
  [decrement]: function (state) {
    state.count = state.count - 1;
  },
  [add_todo]: function (state, action) {
    const newTodo = {
      id: v4(),
      name: action.payload,
    };
    state.todos = [...state.todos, newTodo];
  },
  [delete_todo]: function (state, action) {
    state.todos = state.todos.filter((todo) => todo.id !== action.payload);
  },
  [get_all_todos]: function (state, action) {
    state.todos = [...state.todos, ...action.payload];
  },
});
