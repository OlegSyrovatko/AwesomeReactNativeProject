import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uid: "",
  userName: "",
  email: "",
  avatar: "",
  isLogin: false,
};

const slice = createSlice({
  name: "values",
  initialState,
  reducers: {
    setUserData(state, action) {
      const { email, name, uid } = action.payload;
      state.uid = uid;
      state.email = email;
      state.userName = name;
    },
    setOnline(state) {
      console.log("online");
      state.isLogin = true;
    },
    setOffline(state) {
      console.log("offline");
      state.isLogin = false;
    },
  },
});

export const { setUserData, setOnline, setOffline } = slice.actions;
export default slice.reducer;
