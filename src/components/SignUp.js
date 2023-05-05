import React, { useContext, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { AuthContext } from '../providers/AuthProvider'

function SignUp() {
    const [show, setShow] = useState(false)
    const { createUser, updateUser, setReload } = useContext(AuthContext);

    const handleSignUp = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const photo = form.photo.value;

        createUser(email, password)
            .then(() => {
                // Signed in 
                updateUser(name, photo)
                    .then((userCredential) => {
                        // Profile updated!
                        const user = userCredential.user;
                        console.log(user)
                        setReload(true)
                    }).catch((error) => {
                        // An error occurred
                        // ...
                    });
                    toast.success("Welcome to Chef Guru", {
                        position: "top-center",
                        autoClose: 2000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorCode, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "colored",
                });
            });
    }

    return (
        <div className='login-bg py-12'>
            <div className='w-96 m-auto rounded-lg pb-8 shadow-lg shadow-green-500 px-4'>
                <h2 className='text-center py-5 text-3xl text-green-400 font-extrabold '>Sign Up</h2>
                <div className="flex flex-col">
                    <form onSubmit={handleSignUp}>
                        <label className='text-green-500' htmlFor="name"><b>User Name</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500 mb-4 bg-inherit text-white' type="text" placeholder="Enter Username" name="name" required />

                        <label className='text-green-500' htmlFor="email"><b>Email</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500 mb-4  bg-inherit text-white' type="email" placeholder="Enter Email" name="email" required />

                        <label className='text-green-500' htmlFor="psw"><b>Password</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500  bg-inherit text-white' type={show ? "text" : "password"} placeholder="Enter Password" name="password" required />

                        <p className='m-0 underline cursor-pointer inline-block mb-4 text-white' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>

                        <br />

                        <label className='text-green-500' htmlFor="photo"><b>Photo URL</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-green-500  bg-inherit text-white' type="text" placeholder="Enter Photo URL" name="photo" required />

                        <button className='w-full bg-green-400 text-white py-4 mt-6 font-bold rounded-xl hover:bg-green-500' type="submit">Sign Up <ToastContainer /></button>
                    </form>
                    <label className='text-white'>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                    <hr className='border border-green-400 opacity-50 mt-6' />
                    <p className='text-white'><small>Already an account? <Link to="/login"> <span className="text-red-500">Login</span></Link></small></p>
                </div>
            </div>
        </div>
    )
}

export default SignUp