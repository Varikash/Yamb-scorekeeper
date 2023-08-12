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
  firstHandPathObj: {},
  multipliers: {}
}

export const simpleDiceSlice = createSlice({
  name: 'down',
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
    resetResults: () => initialState,
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
    addToMultipliers: (state, action) => {
      const {id, value} = action.payload;
      state.multipliers[id] = value;
    }
  }
})

export const { updateResult, resetResults, countTotal, addToMultipliers} = simpleDiceSlice.actions;
export default simpleDiceSlice.reducer;