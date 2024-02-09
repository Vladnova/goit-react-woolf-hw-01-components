import defaultImg from '../defaultImg/defaultImg.png';
// import styles from './FriendList.module.css';

//Підкажи як краще, імпортувати знову файл стилів в даний компонент, чи краще з батьківського прокинути в якості пропів?

const FriendListItem = ({ avatar, name, isOnline, id, styles }) => {
  return (
    <li className={styles.item} key={id}>
      <span
        className={`${styles.status} ${
          isOnline ? styles.online : styles.offline
        }`}
      ></span>
      <img
        className={styles.avatar}
        src={avatar || defaultImg}
        alt={name}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
