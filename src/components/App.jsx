import Profile from './Profile/Profile';
import user from '../components/data/user.json';
import data from '../components/data/data.json';
import friends from '../components/data/friends.json'
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';

export const App = () => {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data}/>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends = {friends}/>
    </>
  );
};
