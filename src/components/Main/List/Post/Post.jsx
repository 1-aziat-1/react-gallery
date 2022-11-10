import React from 'react';
import _ from './Post.module.css';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {
    likes,
    urls: link,
  } = postData;

  return (
    <li className={_.post}>
      <div className={_.img}>
        <img src={link.small}/>
      </div>
      <div className={_.likes_wrap}>{likes}</div>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
