import clsx from "clsx";
import css from "./FrendList.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <>
            <img className={css.friendAvatar} src={avatar} alt="Avatar" width="48" />
            <p className={css.friendName}>{name}</p>
            <p className={clsx(css.friendStatus, {
                [css.isOnline]: isOnline,
                [css.isOffline]: !isOnline,
            })}>{isOnline ? "Online" : "Offline"}</p >
            
        </>
    );
};

const FriendList = ({ friends }) => {
    return (
        <div className={css.friendsContainer}>
            <ul className={css.friendsList}>
                {friends.map(friend => (
                    <li className={css.friendsListItem} key={friend.id}>
                        <FriendListItem {...friend} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;

