import _ from './Post.module.css';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Post = ({postData}) => {
  const {
    id,
    likes,
    urls,
  } = postData;

  return (
    <li className={_.post}>
      <Link to={`/picture/${id}`}>
        <div className={_.img}>
          <img src={urls.small}/>
        </div>
        <div className={_.likes_wrap}>{likes}</div>
      </Link>
    </li>
  );
};

Post.propTypes = {
  postData: PropTypes.object,
};
