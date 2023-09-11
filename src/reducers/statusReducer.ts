import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IStatusState } from "../interface/IStatusState";

const initialState: IStatusState = {
  songStatus: null
};

const statusSlice = createSlice({
  name: "songStatus",
  initialState,
  reducers: {
    setSongStatusState: (state, action: PayloadAction<boolean | null>) => {
      state.songStatus = action.payload;
    }
  }
});

export const { setSongStatusState } = statusSlice.actions;

export default statusSlice.reducer;
