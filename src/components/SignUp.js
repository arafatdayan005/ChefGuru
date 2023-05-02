import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import google from './../images/google button.png'
import github from './../images/github button.png'

function SignUp() {
    const [show, setShow] = useState(false)

    return (
        <>
            <div className='w-96 m-auto mt-12 rounded-lg pb-8 shadow-lg shadow-green-500 px-4'>
                <h2 className='text-center py-5 text-3xl text-green-400 font-extrabold '>Sign Up</h2>
                <div className="flex flex-col">
                    <form>
                        <label className='text-green-500' htmlFor="name"><b>User Name</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500 mb-4' type="text" placeholder="Enter Username" name="name" required />
                        
                        <label className='text-green-500' htmlFor="email"><b>Email</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500 mb-4' type="email" placeholder="Enter Email" name="email" required />

                        <label className='text-green-500' htmlFor="psw"><b>Password</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500' type={show ? "text" : "password"} placeholder="Enter Password" name="password" requigreen />

                        <p className='m-0 underline cursor-pointer inline-block mb-4' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>

                        <br />

                        <label className='text-green-500' htmlFor="photo"><b>Photo URL</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500' type="text" placeholder="Enter Photo URL" name="photo" required />

                        <button className='w-full bg-green-400 text-white py-4 mt-6 font-bold rounded-xl hover:bg-green-500' type="submit">Sign Up</button>
                    </form>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <hr className='border border-green-400 opacity-50 mt-6' />
                    <p><small>Already an account? <Link to="/login"> <span className="text-red-500">Login</span></Link></small></p>
                </div>
            </div>
        </>
    )
}

export default SignUp