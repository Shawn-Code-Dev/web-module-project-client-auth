import React from 'react'

const FriendCard = ({friend:{name, age, email}}) => {
  return (
    <div className='card'>
      <h2>{name}</h2>
      <p>{age}</p>
      <p>{email}</p>
    </div>
  )
}

export default FriendCard
