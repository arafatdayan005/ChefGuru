import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from './../images/google button.png'
import github from './../images/github button.png'

function Login() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='w-96 m-auto border-gray-500 mt-12 rounded-lg pb-8 shadow-lg shadow-red-500 px-4'>
                <h2 className='text-center py-5 text-3xl text-red-400 font-extrabold '>Login</h2>
                <div className="flex flex-col">
                    <form>
                        <label className='text-red-500' htmlFor="email"><b>Email</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-red-500 mb-4' type="email" placeholder="Enter Email" name="email" required />

                        <label className='text-red-500' htmlFor="psw"><b>Password</b></label>
                        <input className= 'w-full px-3 py-4 rounded-lg border border-red-500' type={show ? "text" : "password"} placeholder="Enter Password" name="password" required />
                        <p className='m-0 underline cursor-pointer inline-block' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>
                        <button className='w-full bg-red-400 text-white py-4 mt-6 font-bold rounded-xl hover:bg-red-500' type="submit">Login</button>
                    </form>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <hr className='border border-red-400 opacity-50 my-6' />
                    <img className='mb-4 cursor-pointer' src={google} alt="" />
                    <img className='mb-4 cursor-pointer' src={github} alt="" />
                    <p><small>Don't have an account? <Link to="/signup"> <span className="text-green-500">Signup</span></Link></small></p>
                </div>
            </div>
        </>
    )
}

export default Login