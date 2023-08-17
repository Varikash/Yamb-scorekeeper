import { combineReducers } from "@reduxjs/toolkit";
import simpleDiceSlice from "./simpleDiceSlice/simpleDiceSlice";
import minMaxSlice from "./minMaxSlice/minMaxSlice";
import comboDiceSlice from "./comboDiceSlice/comboDiceSlice";
import mainSlice from "./mainSlice/mainSlice";

export const rootReducer = combineReducers({
  simpleDice: simpleDiceSlice,
  minMax: minMaxSlice,
  combo: comboDiceSlice,
  main: mainSlice,
})