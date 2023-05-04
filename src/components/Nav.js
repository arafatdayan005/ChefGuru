import React, { useContext } from 'react'
import Logo from './../logo.png'
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

function Nav() {
    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => {
                // Sign-out successful.
            }).catch((error) => {
                // An error happened.
            });
    }

    return (
        <div className='flex justify-between items-center bg-red-500 text-white'>
            <div className='flex items-center'>
                <img className='h h-24 w-32' src={Logo} alt="" />
                <div>
                    <p className='text-2xl font-extrabold tracking-widest leading-none'>HOT</p>
                    <p className='text-2xl font-extrabold tracking-widest lead leading-none'>CHEF</p>
                </div>
            </div>
            <div className='space-x-8 font-bold tracking-wide text-xl'>
                <Link to="/">Home</Link>
                <Link to="/blogs">Blogs</Link>
                <Link to="/">Recipies</Link>
            </div>
            <div>
                {
                    user ? <button onClick={handleLogOut}>logout</button>
                        :
                        <Link className='font-bold tracking-wide text-xl' to="/login">Login</Link>
                }

            </div>
        </div>
    )
}

export default Nav