import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from 'redux-persist';
import storage from '@react-native-async-storage/async-storage';


const persistConfig = {
  key: 'values',
  storage,
};

const slice = createSlice({
    name: "values",
    initialState: {
   value: ''
   },
  reducers: {
    setStatusValue(state, action) {
      state.value = action.payload; 
    },
  },
});

export const { setStatusValue } = slice.actions;
export const rootReducer  = persistReducer(
  persistConfig,
  slice.reducer
);

