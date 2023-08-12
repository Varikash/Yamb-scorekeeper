import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  minObj: {},
  maxObj: {},
  totalObj: {},
  total: null,
}

export const minMaxSlice = createSlice({
  name: 'minMax',
  initialState,
  reducers: {
    updateResult: (state, action) => {
      const { path, id, value } = action.payload;
      if (path === 'min') {
        state.minObj[id] = value;
      } else if (path === 'max') {
        state.maxObj[id] = value;
      } else if (path === 'total') {
        state.totalObj[id] = value;
      }
    },
    countTotal: (state, action) => {
      state.total = action.payload;
    }
  }
})

export const {updateResult, countTotal} = minMaxSlice.actions;
export default minMaxSlice.reducer;