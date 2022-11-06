import React from 'react';
import _ from './List.module.css';
import Masonry from 'react-masonry-css';
import {usePostsData} from '../../../hooks/usePostsData';
import {Loader} from '../../../UI/Loader/Loader';
import Post from './Post';

export const List = () => {
  const [postsData, loading] = usePostsData();
  return (
    <ul className={_.list}>
      {
        loading ?
          (<Loader/>) :
          (
            <Masonry
              breakpointCols={3}
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
          )
      }
    </ul>
  );
};
