import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {postsRequestAsync} from '../store/posts/action';

export const usePostsData = () => {
  const postsData = useSelector(state => state.posts.posts);
  const loading = useSelector(state => state.posts.loading);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(postsRequestAsync());
  }, []);

  return [postsData, loading];
};
