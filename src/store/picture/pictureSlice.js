import { createSlice } from "@reduxjs/toolkit";
import { pictureRequestAsync } from "./action";

const initialState = {
  error: '',
  picture: {},
  likes: 0,
  status: '',
};

export const pictureSlice = createSlice({
  name: 'picture',
  initialState,
  reducers: {
    resetPicture: (state, action) => {
      state.picture = {};
      state.likes = 0;
      state.status = '';
    }
  },
  extraReducers: {
    [pictureRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [pictureRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.picture = action.payload;
      state.error = '';
    },
    [pictureRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export default pictureSlice.reducer;
