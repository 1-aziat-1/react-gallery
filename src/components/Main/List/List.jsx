import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from './List.module.css';
import Masonry from 'react-masonry-css';
import Post from './Post';
import {postsRequestAsync} from '../../../store/posts/action';
import {postsSlice} from '../../../store/posts/postsSlice';
import { Outlet, useLocation } from 'react-router-dom';

export const List = () => {
  const location = useLocation();
  const pageList = location.pathname !== '/';
  const postsData = useSelector(state => state.posts.posts);
  const page = useSelector(state => state.posts.page);
  const endList = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(postsSlice.actions.firstPhotos());
    dispatch(postsRequestAsync());
  }, [pageList]);

  useEffect(() => {
    if (!postsData.length) return;
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        dispatch(postsRequestAsync());
      }
    }, {
      rootMargin: '50px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    };
  }, [page]);

  return (
    <>
      <ul className={_.list}>
        <Masonry
          breakpointCols={4}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {
            postsData.map(post => (
              <div key={post.id}>
                <Post postData={post}/>
              </div>
            ))
          }
        </Masonry>
        <li ref={endList} className={_.endlist}/>
      </ul>
      <Outlet/>
    </>
  );
};
