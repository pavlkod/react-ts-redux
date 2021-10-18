import { ITodo } from "../models/ITodo";

export interface TodoState {
  todo: ITodo[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionsType {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}

interface FetchTodoAction {
  type: TodoActionsType.FETCH_TODO;
}
interface FetchTodoSuccessAction {
  type: TodoActionsType.FETCH_TODO_SUCCESS;
  payload: ITodo[];
}
interface FetchTodoErrorAction {
  type: TodoActionsType.FETCH_TODO_ERROR;
  payload: string;
}
interface SetTodoPageAction {
  type: TodoActionsType.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction = FetchTodoAction | FetchTodoErrorAction | FetchTodoSuccessAction | SetTodoPageAction;
