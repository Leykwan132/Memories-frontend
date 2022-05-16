import * as api from "../api";
import { AUTH } from "../constant/actionTypes";

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user...
    // make the api call.
    // get data from the backend.
    const { data } = await api.signIn(formData);

    // pass the data to the reducer.
    dispatch({ type: AUTH, data });
    // navigate to the homepage.
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user...
    const { data } = await api.signUp(formData);

    dispatch({ type: AUTH, data });

    // navigate to the homepage.
    history.push("/");
  } catch (error) {
    console.log(error);
  }
};
