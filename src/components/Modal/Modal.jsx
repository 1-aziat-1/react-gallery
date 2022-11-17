import React from 'react';
import ReactDOM from 'react-dom';
import _ from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../img/close.svg';
import {ReactComponent as LikeIcon} from '../../img/likes.svg';
import {useSelector} from 'react-redux';
import {useState} from 'react';
import { API_URL } from '../../api/const';
import axios from 'axios';
import { usePicture } from '../../hooks/usePicture';

export const Modal = ({id}) => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const [picture, likes, isLiked] = usePicture(id);
  const [like, setLike] = useState(likes);
  const [check, setCheck] = useState(false);
  // console.log(picture);
  // const clickLike = () => {
  //   setCheck(!check);
  //   if (check) {
  //     axios
  //       .post(`${API_URL}/photos/${id}/like`,
  //         {
  //           id: `${id}`
  //         },
  //         {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //           },
  //         }
  //       )
  //       .then(({data}) => {
  //         setLike(data.photo.likes);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  //   if (!check) {
  //     axios
  //       .delete(`${API_URL}/photos/${id}/like`, {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       })
  //       .then(({data}) => {
  //         setLike(data.photo.likes);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   }
  // };

  return ReactDOM.createPortal(
    <div className={_.overlay}>
      <div className={_.modal}>
        <div className={_.container}>
          <div className={_.img_wraper}>
            {/* <img className={_.img} src={link.regular}/> */}
          </div>
          <div className={_.interface}>
            <p className={_.author}>{auth.name}</p>
            <button className={_.btn_likes}>
              <LikeIcon/>
              <p className={_.btn_numb}>{like}</p>
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
