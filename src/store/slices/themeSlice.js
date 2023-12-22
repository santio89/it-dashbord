import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  light: false,
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setLight: (state, action) => {
      state.light = action.payload.light
    }
  }
})

export const { setLight } = themeSlice.actions
export default themeSlice.reducer