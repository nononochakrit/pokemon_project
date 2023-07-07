import React from 'react';
import {BrowserRouter, NavLink ,Routes,Route } from 'react-router-dom';
import poke from '../Images/Pokemon-login.png'
import p1 from '../Images/profile1.png'
import ShowAll from './ShowAll';
import Search from './Search';
import Catch from './Catch';
import InfoPopup from './InfoPopup';

function Profile() {
    
    let navStyle ='font-semibold text-lg hover:border-red-400 border-gray-300  border-2 bg-gray-50 rounded-md mt-5 text-center h-15  w-52 sm:w-30 p-2'
    let navActive ='font-semibold text-lg hover:border-red-400 border-green-300  border-2 bg-green-50 rounded-md mt-5 text-center  w-52 p-2'

    const Error= () => {
        return (<><h1 className='text-3xl text-center m-10'>404 Page Not Found</h1></>);}

    const comigSoon= () => {
        return (<><h1 className='text-3xl text-center m-10'>Coming Soon!!</h1></>);}
   
    return ( 
        <>
        
        {/* navbar */}
        <div className="p-4 rounded-lg flex flex-col  gap-2 w-64 h-full border-8  ">
            <h1 className="mt-4 text-2xl   text-center font-semibold">//player name</h1>
            {/* <div className='mt-5 ml-20 rounded-full h-48 w-48 border-8 border-orange-600 overflow-hidden'>  
                <img className='w-full ' src={p1} alt="profilepic" />
            </div>   */}
            <NavLink to="/" className={({isActive})=>isActive?navActive:navStyle} end >Show All Pokemon</NavLink>
            <NavLink to="/Search" className={({isActive})=>isActive?navActive:navStyle}>Search</NavLink>
            <NavLink to="/Catch" className={({isActive})=>isActive?navActive:navStyle}>Catch Pokemon</NavLink>
            <NavLink to="/Collection" className={({isActive})=>isActive?navActive:navStyle}>Your Pokemon</NavLink>
        </div>

        {/* use router */}
        <Routes>
            <Route path='/' element={<ShowAll></ShowAll>}></Route>
            <Route path='/home' element={<ShowAll></ShowAll>}></Route>
            <Route path='/Search' element={<Search></Search>}></Route>
            <Route path='/Catch' element={<Catch></Catch>}></Route>
            <Route path='/Collection' element={comigSoon()}></Route>
            <Route path='*' element={Error()}></Route>
        </Routes>
        </>
     );
}

export default Profile;