import PropTypes from 'prop-types';
import css from './Profile.module.css';
import user from '../user.json';
export const Profile = (avatar, username, tag, location, stats) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img className={css.avatar} src={user.avatar} alt={'User avatar'} />
        <p className={css.username}>{user.username}</p>
        <p className={css.tag}>{user.tag}</p>
        <p className={css.location}>{user.location}</p>
      </div>
      <ul className={css.stats}>
        <li className={css.list}>
          <span className={css.label}>followers:</span>
          <span className={css.quantity}>{user.stats.followers}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>views:</span>
          <span className={css.quantity}>{user.stats.views}</span>
        </li>
        <li className={css.list}>
          <span className={css.label}>likes:</span>
          <span className={css.quantity}>{user.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
};
