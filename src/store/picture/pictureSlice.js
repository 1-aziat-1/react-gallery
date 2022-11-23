import { createSlice } from "@reduxjs/toolkit";
import { pictureRequestAsync } from "./action";

const initialState = {
  error: '',
  picture: {},
  likes: 0,
  isLikes: false,
  status: '',
};

export const pictureSlice = createSlice({
  name: 'picture',
  initialState,
  reducers: {
    newPhoto: state => {
      state.picture = {};
    },
    changeLike: state => {
      state.isLikes = !state.isLikes;
      state.likes += state.isLikes ? 1 : -1;
    },
  },
  extraReducers: {
    [pictureRequestAsync.pending.type]: (state) => {
      state.error = '';
      state.status = 'loading';
    },
    [pictureRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.picture = action.payload.data;
      state.likes = action.payload?.likes || 0;
      state.isLikes = action.payload?.isLikes || false;
      state.error = '';
    },
    [pictureRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.payload;
    },
  },
});

export default pictureSlice.reducer;
