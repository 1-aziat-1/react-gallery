import React from 'react';
import ReactDOM from 'react-dom';
import _ from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../img/close.svg';
import {ReactComponent as LikeIconB} from '../../img/likeB.svg';
import {ReactComponent as LikeIconC} from '../../img/likeC.svg';
import {useDispatch, useSelector} from 'react-redux';
import {usePicture} from '../../hooks/usePicture';
import {useEffect} from 'react';
import { likeUpdate } from '../../api/like';
import { pictureSlice } from '../../store/picture/pictureSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useRef } from 'react';

export const Modal = () => {
  const {id} = useParams();
  const navigate = useNavigate();
  const overlayRef = useRef(null);
  const dispatch = useDispatch();
  const [{urls, user}, status, likes, isLikes] = usePicture(id);
  const token = useSelector(state => state.token.token);
  useEffect(() => {
    dispatch(pictureSlice.actions.newPhoto());
  }, []);

  const clickLike = () => {
    if (!token) return;
    dispatch(pictureSlice.actions.changeLike());
    const method = isLikes ? 'DELETE' : 'POST';
    likeUpdate(id, token, method);
  };

  const handelClick = (e) => {
    const target = e.target;

    if (
      (target === overlayRef.current) || (e.keyCode === 27)) {
      navigate('/');
    }
  };

  useEffect(() => {
    document.addEventListener('click', handelClick);
    document.addEventListener('keydown', handelClick);
    return () => {
      document.removeEventListener('click', handelClick);
      document.removeEventListener('keydown', handelClick);
    };
  }, []);

  return ReactDOM.createPortal(
    <div className={_.overlay} ref={overlayRef}>
      <div className={_.modal}>
        {status === 'loading' && <p>loading</p>}
        {status === 'error' && 'ошибка'}
        {status === 'loaded' && (
          <div className={_.container}>
            <div className={_.img_wraper}>
              <img className={_.img} src={urls.small}/>
            </div>
            <div className={_.interface}>
              <a className={_.author} href={user.links.html} target='_blank' rel="noreferrer">
                <img src={user.profile_image.medium}/>
                <span className={_.author_tittle}>{user.name}</span>
              </a>
              <button className={_.btn_likes} onClick={clickLike}>
                {isLikes ? <LikeIconC/> : <LikeIconB/>}
                {likes}
              </button>
            </div>
            <button className={_.close} onClick={() => {
              navigate('/');
            }}>
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
