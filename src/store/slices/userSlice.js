import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",

  initialState: {
    loading: false,
    errors: null,
    data: [],
  },

  reducers: {
    user(state) {
      return {
        ...state,
        loading: true,
      };
    },

    userSuccess(state, action) {
      return {
        ...state,
        loading: false,
        data: action.payload,
        errors: null,
      };
    },
    
    userFailed(state, action) {
      return {
        ...state,
        loading: false,
        errors: action.payload,
        data: [],
      };
    },
  },
});

export const { user, userSuccess, userFailed } =
  userSlice.actions;

export default userSlice.reducer;
