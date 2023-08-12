import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  totalDown: null,
  totalUp: null,
  totalUpDown: null,
  totalFirstHand: null,
  total: null,
  downPathObj: {},
  upPathObj: {},
  upDownPathObj: {},
  firstHandPathObj: {}
}

export const comboDiceSlice = createSlice({
  name: 'combo',
  initialState,
  reducers: {
    updateResult: (state, action) => {
      const { path, id, value } = action.payload;
      if (path === 'down') {
        state.downPathObj[id] = value;
      } else if (path === 'up') {
        state.upPathObj[id] = value;
      } else if (path === 'upDown') {
        state.upDownPathObj[id] = value;
      } else if (path === 'firstHand') {
        state.firstHandPathObj[id] = value;
      }
    },

    countTotal: (state, action) => {
      const { path, value } = action.payload;
      if (path === 'down') {
        state.totalDown = value;
      } else if (path === 'up') {
        state.totalUp = value;
      } else if (path === 'upDown') {
        state.totalUpDown = value;
      } else if (path === 'firstHand') {
        state.totalFirstHand = value;
      } else if (path === 'total') {
        state.total = value;
      }
    },
  }
})

export const {updateResult, countTotal} = comboDiceSlice.actions;
export default comboDiceSlice.reducer;