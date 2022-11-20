import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pictureRequestAsync, updatePicture} from '../store/picture/action';

export const usePicture = (id) => {
  const token = useSelector(state => state.token.token);
  const likes = useSelector(state => state.picture.likes);
  const isLiked = useSelector(state => state.picture.isLiked);
  const loading = useSelector(state => state.picture.loading);
  const img = useSelector(state => state.picture.img);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pictureRequestAsync(id));
  }, [token]);

  return [img, likes, isLiked, loading];
};
