import axios from "axios";
import { Dispatch } from "redux";
import { IUser } from "../../models/IUser";
import { UserAction, UserActionTypes } from "../../types/user";

export const fetchUsers = () => async (dispatch: Dispatch<UserAction>) => {
  try {
    dispatch({ type: UserActionTypes.FETCH_USERS });
    const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users");
    dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
  } catch (e) {
    dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Can't get users" });
  }
};
