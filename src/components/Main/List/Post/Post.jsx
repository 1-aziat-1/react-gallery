import React from 'react';
import _ from './Post.module.css';
import PropTypes from 'prop-types';

export const Post = ({postData}) => {
  const {
    id,
    likes,
    urls: link,
  } = postData;

  return (
    <li className={_.post}>
      <div>
        <img src={link.small}/>
      </div>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};