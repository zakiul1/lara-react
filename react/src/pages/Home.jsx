import React from 'react'
import { useAuth } from '../AuthContext'



const Home = () => {
  const {handleLogout}=useAuth();
  
  return (
    <button onClick={handleLogout}>
    Logout
    </button>
  )
}

export default Home