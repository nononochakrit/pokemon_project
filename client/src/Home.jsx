import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
//import file
import Profile from './components/Profile';



export default function Home(){
    
    return(
        <>
            <div className=' flex gap-1 p-5 w-screen h-screen '>
                <Profile/>
                
            </div>
        </>
    );
};





