import React from 'react';
import { useState ,} from 'react';
import { useNavigate,NavLink ,Routes,Route, useRoutes} from "react-router-dom";
import Home from './Home';
import poke from './Images/Pokemon-login.png'

export default function LoginPage(){
    const [showPage,setShowPage]=useState(true);
    const [name,setName]=useState('')
    console.log(name);
    
    const registerSubmit=(e)=>{
        e.preventDefault();

    }

    const loginForm =() => {
        return (
            <div className='md:w-1/2 bg-pink-100 rounded-2xl p-9'>
                <h2 className='font-bold text-3xl uppercase'>Log in</h2>
                    <p className="text-xs mt-4 text-[#002D74]">If you are already a member, easily log in!</p>

                    <form action='/login' className='flex flex-col gap-3  '>
                        <input onChange={(e) => setName(e.target.value)} className=" w-full p-2 mt-8 opacity-70 rounded-xl border " id='username' type="text" name='username' placeholder='User Name'  required/>
                        <input className='w-full p-2 mt-1 opacity-70 rounded-xl border' id='_password' type="password" name="password" placeholder='Password' required/>
                        <NavLink to="/home" className='translate-x-1/2 text-center hover:scale-110 duration-100 mt-1 p-2 w-1/2 bg-yellow-400 rounded-xl text-white uppercase'>log in</NavLink>
                        <div className='flex justify-center gap-5'>
                            <a onClick={()=>(setShowPage(!showPage))} className='text-gray-700 hover:underline'>If you don't have account...Register</a>
                        </div>
                    </form>
            </div>
        );
    }

    const registerForm =() => {
        return (
            <div className='md:w-1/2 bg-pink-100 rounded-2xl p-9'>
                <h2 className='font-bold text-3xl uppercase'>Register</h2>
                    <form action='/register' className='flex flex-col gap-3  '>
                        <input className=" w-full p-2 mt-2 opacity-70 rounded-xl border " id='_username' type="text" name='user_name' placeholder='User Name' required/>
                        <input className=" w-full p-2 mt-0 opacity-70 rounded-xl border " id='_email' type="email" name='user_email' placeholder='Email' required/>
                        <input className='w-full p-2 mt-1 opacity-70 rounded-xl border' id='_password' type="password" name="password" placeholder='Password' required/>
                        <button onClick={registerSubmit}   className='translate-x-1/2  hover:scale-110 duration-100 mt-1 p-2 w-1/2 bg-yellow-400 rounded-xl text-white uppercase'>register now</button>
                            <div className='flex justify-center gap-5'>
                                <a onClick={()=>setShowPage(!showPage)}  className='text-gray-700 hover:underline'>If your ready, go to Log in!</a>
                            </div>
                    </form>
            </div>
        );
    }
    return (
        <>
            <section className='bg-gray-200 min-h-screen flex items-center justify-center'>
            
                <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
                    {showPage?loginForm():registerForm()}
                    <div className='w-1/2  rounded-2xl border md:block hidden'>
                        <img onClick="window.open(this.src)" className="hover:animate-spin " role="button" src={poke} alt="" />
                    </div>
                </div>
            </section>
            <Routes>
                <Route path='/home' element={<Home></Home>}></Route>
                
            </Routes>
            
        </>
    );
};





