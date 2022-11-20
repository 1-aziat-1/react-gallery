import axios from 'axios';
import {
  ACCESS_KEY,
  API_URL
} from '../../api/const';

export const PICTURE_REQUEST = 'PICTURE_REQUEST';
export const PICTURE_REQUEST_SUCCESS = 'PICTURE_REQUEST_SUCCESS';
export const PICTURE_REQUEST_ERROR = 'PICTURE_REQUEST_ERROR';
export const LIKE_CHANGE = 'LIKE_CHANGE';
export const LIKE_DELETE = 'LIKE_DELETE';
export const UPDATE_PICTURE = 'UPDATE_PICTURE';

export const pictureRequest = () => ({
  type: PICTURE_REQUEST,
});

export const pictureRequestSuccess = (data) => ({
  type: PICTURE_REQUEST_SUCCESS,
  picture: data,
});

export const pictureRequestError = (error) => ({
  type: PICTURE_REQUEST_ERROR,
  error,
});

export const likeChange = () => ({
  type: LIKE_CHANGE,
});

export const likeDelete = () => ({
  type: LIKE_DELETE,
});

export const updatePicture = () => ({
  type: UPDATE_PICTURE,
});

export const pictureRequestAsync = (id) => (dispatch, getState) => {
  dispatch(pictureRequest());

  axios(`${API_URL}/photos/${id}`, {
    params: {
      client_id: `${ACCESS_KEY}`,
      id: `${id}`,
    }
  })
    .then(({data}) => {
      dispatch(pictureRequestSuccess(data));
    })
    .catch((error) => {
      console.error(error);
      dispatch(pictureRequestError(error));
    });
};

export const likeChangeAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  axios
    .post(`${API_URL}/photos/${id}/like`,
      {
        id: `${id}`
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    // .then(({data}) => {
    //   dispatch(likeChange(data.photo));
    // })
    .catch((error) => {
      console.log(error);
    });
};

export const likeDeleteAsync = (id) => (dispatch, getState) => {
  const token = getState().token.token;

  if (!token) return;

  axios
    .delete(`${API_URL}/photos/${id}/like`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    // .then(({data}) => {
    //   dispatch(likeDelete(data.photo));
    // })
    .catch((error) => {
      console.log(error);
    });
};
