import React from 'react';
import _ from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../img/close.svg';
import {ReactComponent as LikeIcon} from '../../img/likes.svg';
import {useSelector} from 'react-redux';

export const Modal = ({likes, link}) => {
  const auth = useSelector(state => state.auth.data);
  
  return (
    <div className={_.overlay}>
      <div className={_.modal}>
        <div className={_.container}>
          <div className={_.img_wraper}>
            <img className={_.img} src={link.regular}/>
          </div>
          <div className={_.interface}>
            <p className={_.author}>{auth.name}</p>
            <button className={_.btn_likes}>
              <LikeIcon/>
              <p className={_.btn_numb}>{likes}</p>
            </button>
          </div>
          <button className={_.close}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>
  );
};
