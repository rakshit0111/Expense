// src/Login/Login.js
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import {auth} from '../Auth/firebase'

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefaukt();
        try{
            await signInWithEmailAndPassword(auth,email,password);
            console.log("Logged in Successfully");
        }
        catch(error){
            console.log(error.message);
        }
    };

    return (
        <div className="h-screen w-screen flex bg-[#E7E0FB] justify-center items-center " onSubmit={handleSubmit}>
            {/* Background Video */}
            <video
                loop
                autoPlay
                muted
                preload="auto"
                type="video/mp4"
                src="/assets/Comp 1_2.mp4"
                className="fixed inset-0 w-full h-full object-cover z-0"
            ></video>

            {/* Main Container */}
            <div className="fixed flex items-center justify-center w-[89%] h-[85%] max-w-8xl p-7 bg-white bg-opacity-10 backdrop-blur-lg border border-white rounded-3xl shadow-lg">
                {/* Content Wrapper */}
                <div className="flex flex-col md:flex-row items-center justify-between w-full h-full space-y-8 md:space-y-0 md:space-x-8">
                    {/* Photo Section */}
                    <div className="w-full md:w-1/2 h-[101%] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105 flex items-center justify-center">
                        <img
                            src="/assets/login-image.jpg"
                            className="max-w-full h-[99%] py-3 rounded-lg object-fit"
                            alt="Login Visual"
                        />
                    </div>

                    {/* Details Section */}
                    <div className="flex flex-col justify-evenly items-center w-full md:w-1/2 space-y-6">
                        <p className="text-4xl font-semibold font-sans flex gap-2">
                            <span className="text-white">Welcome</span><p className="text-blue-400">Back!</p>
                        </p>

                        {/* Username Field */}
                        <div className="relative w-full h-10">
                            <input
                                type="text"
                                name="username"
                                id="userName"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full h-full bg-transparent border-b border-black focus:outline-none text-xl"
                            />
                            <label
                                htmlFor="userName"
                                className="absolute left-0 bottom-2 text-lg transition-transform transform origin-left pointer-events-none"
                            >
                                Username or email
                            </label>
                        </div>

                        {/* Password Field */}
                        <div className="relative w-full h-10">
                            <input
                                type="password"
                                name="password"
                                id="passWord"
                                required
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full h-full bg-transparent border-b border-black focus:outline-none text-xl"
                            />
                            <label
                                htmlFor="passWord"
                                className="absolute left-0 bottom-2 text-lg transition-transform transform origin-left pointer-events-none"
                            >
                                Password
                            </label>
                        </div>

                        {/* Password Safety Section */}
                        <div className="flex items-center justify-between w-full text-lg">
                            <div className="flex items-center space-x-2">
                                <input type="checkbox" id="chk" className="w-5 h-5" />
                                <label htmlFor="chk">Remember Password</label>
                            </div>
                            <p>Forgot Password?</p>
                        </div>

                        {/* Submit Button */}
                        <button className="w-full h-11 bg-white rounded-2xl shadow-lg text-xl transition hover:bg-gray-200 active:bg-gray-300 text-black">
                            Continue
                        </button>

                        <p className="text-xl">Or</p>

                        {/* Continue with Google */}
                        <button className="flex items-center justify-center w-full h-11 bg-white rounded-2xl shadow-lg text-xl transition hover:bg-gray-200 active:bg-gray-300">
                            <img src="/assets/google.png" alt="google logo" className="w-8 h-8" />
                            <span className="ml-4">Continue with Google</span>
                        </button>

                        <p className="text-xl">Don't have an account?</p>

                        {/* Sign Up Button */}
                        <button className="w-full h-11 bg-purple-600 text-white rounded-2xl shadow-lg text-xl transition hover:bg-gray-200 hover:text-black active:bg-purple-700">
                            Sign Up
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
