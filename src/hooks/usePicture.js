import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pictureRequestAsync} from '../store/picture/action';

export const usePicture = (id) => {
  const token = useSelector(state => state.token.token);
  const picture = useSelector(state => state.picture.picture);
  const status = useSelector(state => state.picture.status);
  const likes = useSelector(state => state.picture.likes);
  const isLikes = useSelector(state => state.picture.isLikes);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pictureRequestAsync(id));
  }, [token]);

  return [picture, status, likes, isLikes];
};
