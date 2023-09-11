import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAlbumState } from "../interface/IAlbumState";

const initialState: IAlbumState = {
  selectedAlbum: null
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    setSelectedAlbumState: (state, action: PayloadAction<string | null>) => {
      state.selectedAlbum = action.payload;
    }
  }
});

export const { setSelectedAlbumState } = albumSlice.actions;

export default albumSlice.reducer;
