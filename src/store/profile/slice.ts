import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  name: '...',
  visible: true,
  isAuth: false,
};

const profileSLice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    toggleProfile: (state) => {
      state.visible = !state.visible;
    },
    changeName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    auth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload;
    },
  },
});

export const { toggleProfile, changeName, auth } = profileSLice.actions;
export const profileReducer = profileSLice.reducer;
