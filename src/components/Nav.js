import React, { useContext } from 'react'
import Logo from './../logo.png'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

function Nav() {
    const { user, logOut } = useContext(AuthContext)
    console.log(user?.displayName)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className='px-12 flex flex-wrap justify-between items-center bg-red-500 text-white'>
            <div className='flex items-center'>
                <img className='h-24 w-32' src={Logo} alt="" />
                <div>
                    <p className='text-2xl font-extrabold leading-none'>Chef</p>
                    <p className='text-2xl font-extrabold lead leading-none'>Guru</p>
                </div>
            </div>
            <div className='space-x-8 font-bold tracking-wide text-xl'>
                <NavLink className={({ isActive }) => isActive ? "underline" : ""} to="/">Home</NavLink>
                <NavLink className={({ isActive }) => isActive ? "underline" : ""} to="/blogs">Blogs</NavLink>
                <NavLink className={({ isActive }) => isActive ? "underline" : ""} to="/recipe">Recipies</NavLink>
            </div>
            <div className='font-bold tracking-wide text-xl'>
                {
                    user && user.displayName ? <button onClick={handleLogOut}> <img  className='h-12 w-12 rounded-full' title={user.displayName} src={user.photoURL} alt="" /> </button> :
                        <NavLink className={({ isActive }) => isActive ? "underline" : ""} to="/login">Login</NavLink>
                }

            </div>
        </div>
    )
}

export default Nav