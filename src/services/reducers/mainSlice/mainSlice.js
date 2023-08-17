import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  total: null,
}

export const mainSlice = createSlice({
  name: 'total',
  initialState,
  reducers: {
    countTotal: (state, action) => {
      state.total = action.payload;
    }
  }
})


export const {countTotal} = mainSlice.actions;
export default mainSlice.reducer;