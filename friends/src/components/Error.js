import React from 'react'

const Error = ({err}) => {
  return (
    err !== null &&(
      <div>
        <p>All fields are required!</p>
      </div>
    )
  )
}

export default Error
