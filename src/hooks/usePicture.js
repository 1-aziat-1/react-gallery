import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {pictureRequestAsync, updatePicture} from '../store/picture/action';

export const usePicture = (id) => {
  const token = useSelector(state => state.token.token);
  const picture = useSelector(state => state.picture.picture);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pictureRequestAsync(id));
  }, [token]);

  return picture;
};
