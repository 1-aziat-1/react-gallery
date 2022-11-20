import React from 'react';
import ReactDOM from 'react-dom';
import _ from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../img/close.svg';
import {ReactComponent as LikeIcon} from '../../img/likes.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {usePicture} from '../../hooks/usePicture';
import {useEffect} from 'react';
import {likeChangeAsync, likeDeleteAsync, updatePicture} from '../../store/picture/action';

export const Modal = ({id}) => {
  const auth = useSelector(state => state.auth.data);
  const [img, likes, isLiked] = usePicture(id);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(updatePicture());
  }, []);

  const clickLike = () => {
    if (!isLiked) {
      dispatch(likeChangeAsync(id));
    }

    if (isLiked) {
      dispatch(likeDeleteAsync(id));
    }
  };

  return ReactDOM.createPortal(
    <div className={_.overlay}>
      <div className={_.modal}>
        <div className={_.container}>
          <div className={_.img_wraper}>
            <img className={_.img} src={img}/>
          </div>
          <div className={_.interface}>
            <p className={_.author}>{auth.name}</p>
            <button className={_.btn_likes} onClick={clickLike}>
              <LikeIcon/>
              <p className={_.btn_numb}>{likes}</p>
            </button>
          </div>
          <button className={_.close}>
            <CloseIcon />
          </button>
        </div>
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
