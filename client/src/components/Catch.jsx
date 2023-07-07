import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
//import file
import background1 from '../Images/background1.png'
import poke from '../Images/Pokemon-login.png'

export default function Catch(){
    const init=Math.floor(Math.random() * 905) + 1;
    const [url,setUrl]=useState(`https://pokeapi.co/api/v2/pokemon/${init}/`)
    const [found,setFound]= useState([])
    const [collection,setCollection]=useState([]);
    console.log(found)

    // save state to collection
    const collect=(e)=>{
        e.preventDefault();
        setCollection((pState)=>[...pState,found]) 
        alert(`Catch ${found.name} Success!`)  
    }

    //print all in collection
    collection.map(c=>{
        console.log(c.name)
    })

    //set new url 
    const randomNow=(e)=>{
        e.preventDefault();
        const ran=Math.floor(Math.random() * 905) + 1;
        console.log(ran)
        setUrl(`https://pokeapi.co/api/v2/pokemon/${ran}/`)
    }

    //get url
    const foundPokemon=async()=>{
        const res=await axios.get(url)
        setFound(res?.data)
    }
    
    useEffect(()=>{
        setFound([])
        foundPokemon()
    },[url])

    const mainPic=found?.sprites?.other?.home?.front_default;
    return(
        <>
        <div className='w-4/5 max-md:w-fit max-sm:hidden p-3 ml-2 pb-12 rounded-2xl h-full  border '> 

            {/* name */}
            <div className='w-full h-1/6 flex flex-col justify-end '>
                <h1 className='uppercase text-3xl w-full text-center max-md:text-2xl mt-1'>You found  {found?.name} !</h1>
            </div>

            {/* image */}
            <div className='w-full h-4/6  flex justify-center'>
                <div className='w-fit h-auto flex justify-center border-8'>
                    <img className='h-full' src={mainPic} alt="" />
                </div>
            </div>

            {/* //button */}
            <div className='w-full mt-2 h-auto flex gap-5 justify-center '>
                <button className='border  hover:bg-yellow-300  rounded-full w-48 h-20 shadow-lg max-md:h-15' onClick={randomNow}>Find New</button>
                <button className='border hover:bg-red-300 p-3 rounded-full w-48 h-20 shadow-lg' onClick={collect}>Catch Pokemon</button>
            </div>

        </div>
        </>
    )

}