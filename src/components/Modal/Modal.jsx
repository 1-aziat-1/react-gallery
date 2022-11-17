import React from 'react';
import ReactDOM from 'react-dom';
import _ from './Modal.module.css';
import {ReactComponent as CloseIcon} from '../../img/close.svg';
import {ReactComponent as LikeIcon} from '../../img/likes.svg';
import {useDispatch, useSelector} from 'react-redux';
import {useState} from 'react';
import {usePicture} from '../../hooks/usePicture';
import {useEffect} from 'react';
import {likeChangeAsync} from '../../store/picture/action';

export const Modal = ({id}) => {
  const auth = useSelector(state => state.auth.data);
  const token = useSelector(state => state.token.token);
  const [img, likes, isLiked] = usePicture(id);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();

  const clickLike = () => {
    useEffect(() => {
      dispatch(likeChangeAsync(id));
    }, [isLiked]);
    
    // setCheck(!check);
    // if (check) {
     
    // }
    // if (!check) {
    //   axios
    //     .delete(`${API_URL}/photos/${id}/like`, {
    //       headers: {
    //         Authorization: `Bearer ${token}`,
    //       },
    //     })
    //     .then(({data}) => {
    //       setLike(data.photo.likes);
    //     })
    //     .catch((error) => {
    //       console.log(error);
    //     });
    // }
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
