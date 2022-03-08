import { createSlice } from "@reduxjs/toolkit";
import { saveUserToken, getSavedUserToken } from "../../utils";

const authSlice = createSlice({
  name: "auth",

  initialState: {
    loading: false,
    errors: null,
    data: [],
    token: getSavedUserToken(),
  },

  reducers: {
    login(state, action) {
      return {
        ...state,
        loading: true,
      };
    },

    loginSuccess(state, action) {
      saveUserToken(action.payload)
      return {
        ...state,
        loading: false,
        data: action.payload,
        token: action.payload,
        errors: null,
      };
    },

    loginFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
        token: null,
      };
    },
  },
});

export const { login, loginSuccess, loginFailed } = authSlice.actions;

export default authSlice.reducer;