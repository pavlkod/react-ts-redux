import { TodoAction, TodoActionsType, TodoState } from "../../types/todo";

const initialState: TodoState = {
  todo: [],
  loading: false,
  error: null,
  page: 1,
  limit: 20,
};

export const todoReducer = (state = initialState, action: TodoAction): TodoState => {
  switch (action.type) {
    case TodoActionsType.FETCH_TODO:
      return { ...state, loading: true };
    case TodoActionsType.FETCH_TODO_SUCCESS:
      return { ...state, loading: false, todo: action.payload };
    case TodoActionsType.FETCH_TODO_ERROR:
      return { ...state, loading: false, error: action.payload };
    case TodoActionsType.SET_TODO_PAGE:
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
