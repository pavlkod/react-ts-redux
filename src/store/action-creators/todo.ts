import axios from "axios";
import { Dispatch } from "redux";
import { TodoAction, TodoActionsType } from "../../types/todo";

export const fetchTodos =
  (page = 1, limit = 10) =>
  async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionsType.FETCH_TODO });
      const response = await axios.get("https://jsonplaceholder.typicode.com/todos", {
        params: { _page: page, _limit: limit },
      });
      dispatch({ type: TodoActionsType.FETCH_TODO_SUCCESS, payload: response.data });
    } catch (e) {
      dispatch({ type: TodoActionsType.FETCH_TODO_ERROR, payload: "Can't get todos" });
    }
  };

export const setTodoPage = (page: number): TodoAction => {
  return { type: TodoActionsType.SET_TODO_PAGE, payload: page };
};
