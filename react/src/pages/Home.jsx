import React from 'react'
import { useAuth } from '../AuthContext'
import { Navigate } from 'react-router-dom';



const Home = () => {
  const { handleLogout, user } = useAuth();

  if (!user) {
    return <Navigate to={'/login'} />
  }
  return (
    <>
      hi
    </>
  )
}

export default Home