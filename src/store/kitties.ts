import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { KittyEntity } from "../shared/kitty";

export interface KittiesState {
  kitties: KittyEntity[];
}

export const kittiesSlice = createSlice({
  name: "kitties",
  initialState: {
    kitties: [],
  } as KittiesState,
  reducers: {
    setKitties: (
      state: KittiesState,
      { payload }: PayloadAction<KittyEntity[]>
    ) => {
      state.kitties = payload;
    },
    addKitty: (
      state: KittiesState,
      { payload }: PayloadAction<KittyEntity>
    ) => {
      state.kitties = [...state.kitties, payload];
    },
  },
});

export const kittiesActions = kittiesSlice.actions;

export const kittiesReducer = kittiesSlice.reducer;
