import React, {useState} from 'react';
import _ from './Post.module.css';
import PropTypes from 'prop-types';
import {Modal} from '../../../Modal/Modal';

export const Post = ({postData}) => {
  const {
    likes,
    urls: link,
  } = postData;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <li className={_.post} onClick={() => {setIsModalOpen(true)}}>
      <div className={_.img}>
        <img src={link.small}/>
      </div>
      <div className={_.likes_wrap}>{likes}</div>
      {isModalOpen && <Modal likes={likes} link={link}/>}
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
