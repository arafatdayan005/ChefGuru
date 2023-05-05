import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import google from './../images/google button.png'
import github from './../images/github button.png'
import { AuthContext } from '../providers/AuthProvider'
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth'

function Login() {
    const [show, setShow] = useState(false)

    const { loginUser, googleLogin, githubLogin } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (e) => {
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                console.log(user)
                navigate(from, { replace: true })
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

    const handleGoogleLogin = () => {
        googleLogin()
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });
    }

    const handleGithubLogin = () => {
        githubLogin()
        .then((result) => {
            // This gives you a GitHub Access Token. You can use it to access the GitHub API.
            const credential = GithubAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GithubAuthProvider.credentialFromError(error);
            // ...
        });
    }

    return (
        <div className='login-bg py-12'>
            <div className='w-96 m-auto rounded-lg pb-8 shadow-lg shadow-red-500 px-4'>
                <h2 className='text-center py-5 text-3xl text-red-400 font-extrabold '>Login</h2>
                <div className="flex flex-col">
                    <form onSubmit={handleLogin}>
                        <label className='text-red-500' htmlFor="email"><b>Email</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-red-500 mb-4 bg-inherit text-white' type="email" placeholder="Enter Email" name="email" required />

                        <label className='text-red-500' htmlFor="psw"><b>Password</b></label>
                        <input className='w-full px-3 py-4 rounded-lg border border-red-500 bg-inherit text-white' type={show ? "text" : "password"} placeholder="Enter Password" name="password" required />
                        <p className='m-0 underline cursor-pointer inline-block text-white' onClick={() => setShow(!show)}>
                            <small>
                                {
                                    show ? <span>Hide Password</span> :
                                        <span>Show Password</span>
                                }
                            </small>
                        </p>
                        <button className='w-full bg-red-400 text-white py-4 mt-6 font-bold rounded-xl hover:bg-red-500' type="submit">Login <ToastContainer /></button>
                    </form>
                    <label className='text-white'>
                        <input className='' type="checkbox" name="remember" /> Remember me
                    </label>
                    <hr className='border border-red-400 opacity-50 my-6' />
                    <img className='mb-4 cursor-pointer' onClick={handleGoogleLogin} src={google} alt="" />
                    <img className='mb-4 cursor-pointer' onClick={handleGithubLogin} src={github} alt="" />
                    <p className='text-white'><small>Don't have an account? <Link to="/signup"> <span className="text-green-500">Signup</span></Link></small></p>
                </div>
            </div>
        </div>
    )
}

export default Login