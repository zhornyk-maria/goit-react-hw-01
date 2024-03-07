
const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <div>
            <img src={avatar} alt="Avatar" width="48" />
            <p>{name}</p>
            <p>{isOnline ? "Online" : "Offline"}</p >
        </div>
    );
};

const FriendList = ({ friends }) => {
    return (
        <div className="friendsContainer">
            <ul>
                {friends.map(friend => (
                    <li key={friend.id}>
                        <FriendListItem {...friend} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FriendList;

