import React, { useEffect } from 'react'
import FriendCard from './FriendCard';
import Loading from './Loading';

const FriendsList = ({ friends, getFriends, loading }) => {
  useEffect(() => {
    getFriends(); // eslint-disable-next-line
  }, [])

  if(loading){
    return <Loading />
  } else {
    return (
      <div>
        {friends.map(friend => <FriendCard key={friend.id} friend={friend}/>)}
      </div>
    )
  }
}

export default FriendsList
