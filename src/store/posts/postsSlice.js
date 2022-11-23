import { createSlice } from "@reduxjs/toolkit";
import { postsRequestAsync } from "./action";


const initialState = {
  posts: [],
  error: '',
  page: 1,
  status: '',
};

// export const postsSlice = createSlice({
//   name: 'posts',
//   initialState,
//   reducers: {
//     postsRequest: (state) => {
//       state.error = '';
//       state.status = 'loading';
//     },
//     postsRequestSuccess: (state, action) => {
//       state.posts = action.payload;
//       state.error = '';
//       state.status = 'loaded';
//     },
//     postsRequestError: (state, action) => {
//       state.error = action.payload;
//       state.status = 'error';
//     },
//     changePage: (state, action) => {
//       state.page = action.payload;
//     },
//   },
// });

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    firstPhotos: state => {
      state.photos = [];
      state.page = 1;
    },
  },
  extraReducers: {
    [postsRequestAsync.pending.type]: state => {
      state.status = 'loading';
      state.error = '';
    },
    [postsRequestAsync.fulfilled.type]: (state, action) => {
      state.status = 'loaded';
      state.posts = action.payload || [];
      state.error = '';
      state.page += 1;
    },
    [postsRequestAsync.rejected.type]: (state, action) => {
      state.status = 'error';
      state.error = action.error;
    },
  },
});

export default postsSlice.reducer;
