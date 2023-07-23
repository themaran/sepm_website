import React from 'react'
import MAMCET_LOGO from '../assets/images/mamcet_logo.jpg'
import teaching from '../assets/images/teaching.svg'
import hero from '../assets/images/blob-haikei.svg'
import master_gi from '../assets/images/master_gi.jpg'
import './Login.css'
import { useState } from 'react'
import config from '../firebaseConfig'
import { useDispatch, useSelector } from 'react-redux';
import { loginRequest, loginSuccess, loginFailure } from './actions/authActions';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
export const Login = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();
    const [isLoadingBtn, setLoadingBtn] = useState(false);
    const dispatch = useDispatch();
    const isLoading = useSelector((state) => state.auth.loading);


    const handleSubmit = (e) => {
        setLoadingBtn(true);
        e.preventDefault();
        if (email != '' && password != '') {
            dispatch(loginRequest());
            const auth = getAuth(config);
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    setLoadingBtn(false)
                    dispatch(loginSuccess());
                })
                .catch((error) => {
                    setLoadingBtn(false);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    dispatch(loginFailure(errorMessage));
                });
        }
    }
    const handleEmailInput = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordInput = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div>
            <div className="flex">
                <div className="left w-3/12 h-screen pt-36 grid-cols-1 hidden lg:grid p-8">
                    <div className='relative h-80 w-80 p-10 justify-self-center flex justify-center items-center'>
                        <img src={teaching} className='w-3/4 z-10' alt='MAMCET Logo' />
                        <img src={hero} className='w-full absolute opacity-40' alt='svg' />
                    </div>
                    <div className='grid grid-cols-1 h-20 gap-1'>
                        <h1 className='text-base font-bold'>M.A.M. College Of Engineering & Technology</h1>
                        <p className='text-xs'>Students CGPA Calculation Platform</p>
                        <p className='text-xs mt-5'>Platform Version: 1.2</p>
                    </div>
                </div>
                <div className='w-full p-10 relative'>
                    <div className='w-20 flex'>
                        <img src={master_gi} alt='master_gi' className='w-full' />
                    </div>

                    <form onSubmit={(e) => handleSubmit(e)} method="post"
                        className='flex justify-center mt-10'>

                        <div className='flex flex-col items-center w-full md:w-2/6'>
                            <div className="imgcontainer">
                                <img src={MAMCET_LOGO} alt="Avatar" className="avatar w-24" />
                            </div>
                            <div className='mt-5 text-center grid gap-4'>
                                <h4 className='font-medium text-md'>DEPARTMENT OF INFORMATION TECHNOLOGY</h4>
                                <h3 className='font-bold m-0 p-0 capitalize'>Login To Platform</h3>
                            </div>
                            <div className='line w-full mt-7'></div>
                            <div className="grid gap-6 mt-8 w-full">
                                <div className='grid'>
                                    <label for="uname">Username</label>
                                    <input type="text" placeholder="Registered email" name="uname" onChange={(e) => handleEmailInput(e)} required />
                                </div>
                                <div className='grid'>
                                    <label for="psw">Password</label>
                                    <input type="password" placeholder="Enter Password" name="psw" onChange={(e) => handlePasswordInput(e)} required />
                                    <span className='text-red-400 text-xs mt-1'>{error}</span>
                                </div>


                                <div className="w-full relative flex items-center" >
                                    <label className='flex items-center cursor-pointer'>
                                        <input type="checkbox" name="remember" className='mr-2' /> Remember me
                                    </label>
                                    <span className="psw text-sm text-blue-500 absolute right-0"><a href="#">Forgot password?</a></span>
                                </div>
                                <button type="submit" disabled={isLoading} className={`text-white ${isLoadingBtn ? 'bg-blue-300' : 'bg-blue-500'} font-semibold rounded-3xl flex justify-center items-center w-full text-xs h-12 md:h-10`}>{isLoadingBtn ? 'Please wait...' : 'Login'}</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}
