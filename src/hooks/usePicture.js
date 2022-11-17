import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pictureRequestAsync} from '../store/picture/action';

export const usePicture = (id) => {
  const token = useSelector(state => state.token.token);
  const picture = useSelector(state => state.picture.picture);
  const likes = useSelector(state => state.picture.likes);
  const isLiked = useSelector(state => state.picture.isLiked);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(pictureRequestAsync(id));
  }, [token]);

  return [picture, likes, isLiked];
};
