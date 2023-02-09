import React from 'react'

const Logout = () => {
  localStorage.removeItem('userloginstatus');
  window.location.href='/login'
  return (
    <>
      
    </>
  )
}

export default Logout
