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
import { likeUpdate } from '../../api/like';

export const Modal = ({id}) => {
  const auth = useSelector(state => state.auth.data);
  const {likes, urls, liked_by_user:isLiked} = usePicture(id);
  const loading = useSelector(state => state.picture.loading);
  const token = useSelector(state => state.token.token);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updatePicture());
  }, []);

  const clickLike = () => {
    if (!isLiked) {
      likeUpdate(id, token, 'post');
    }
    if (isLiked) {
      likeUpdate(id, token, 'delete');
    }
  };

  return ReactDOM.createPortal(
    <div className={_.overlay}>
      <div className={_.modal}>
        {
          loading ?
            (<p>Загрузка</p>) :
            (
              <div className={_.container}>
                <div className={_.img_wraper}>
                  <img className={_.img} src={urls?.regular}/>
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
            )
        }
      </div>
    </div>,
    document.getElementById('modal-root'),
  );
};
