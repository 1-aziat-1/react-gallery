import {useEffect, useRef} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import _ from './List.module.css';
import Masonry from 'react-masonry-css';
import Post from './Post';
import {postsRequestAsync} from '../../../store/posts/action';

export const List = () => {
  const postsData = useSelector(state => state.posts.posts);
  const endList = useRef(null);
  const dispatch = useDispatch();
  let page = 0;

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        page = ++page;
        dispatch(postsRequestAsync(page));
      }
    }, {
      rootMargin: '50px',
    });

    observer.observe(endList.current);

    return () => {
      if (endList.current) {
        observer.unobserve(endList.current);
      }
    }
  }, [endList.current]);

  return (
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
  );
};
