import React from 'react'

function Auth() {
  return (
    <div>
      <button className='login'>
        <a href="/login">Login</a>
      </button>
      <button className='sign-up'>
        <a href="/signup">Sign Up</a>
      </button>
    </div>
  )
}

export default Auth