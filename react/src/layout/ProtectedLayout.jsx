import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import NavBar from './NavBar'
import SideBar from './SideBar'
import { useAuth } from '../AuthContext'
import Loading from '../components/all/Loading'

const ProtectedLayout = () => {
  const { handleLogout, user } = useAuth();

  if (!user) {
    return <Navigate to={'/login'} />
  }
  return (
    <>
      <NavBar />
      <SideBar />
      <div className="p-4 sm:ml-64 dark:bg-gray-800 h-screen">
        <div className=" rounded-lg dark:border-gray-700 mt-14">
          <Outlet />
        </div>
      </div>
    </>
  )
}

export default ProtectedLayout