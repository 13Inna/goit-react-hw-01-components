import css from './Friends.module.css';
export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <li className={css.item} key={id}>
          {isOnline ? (
            <span className={css.green}></span>
          ) : (
            <span className={css.red}></span>
          )}

          <img
            className={css.avatar}
            src={avatar}
            alt="User avatar"
            width="48"
          />
          <p className={css.name}>{name}</p>
        </li>
      ))}
    </ul>
  );
};
