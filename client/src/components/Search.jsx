import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
//import file
import unknownPic from '../Images/unknownPic.png'



export default function Search(){

    const [searchKey,setSearchKey]= useState('psyduck');
    const [searchUrl,setSearchUrl]=useState('https://pokeapi.co/api/v2/pokemon/psyduck/')
    const [result,setResult]=useState([])
    
    //set search url
    const searchNow=(e)=>{
        e.preventDefault();
        setSearchUrl(`https://pokeapi.co/api/v2/pokemon/${searchKey.toLowerCase()}`)
    }

    //get search url
    const getSearchName=async()=>{
        const res = await axios.get(searchUrl)
        setResult(res.data)
    }

    useEffect(() => {
        let abortController = new AbortController;
        getSearchName()
        return ()=>abortController.abort();
    },[searchUrl]);

    
    const mainPic=result?.sprites?.other?.home?.front_default;

    const mtResult=()=>{
        return(
            <>  
                {/* //Info div */}
                <div className='w-full flex   h-5/6 '>
                        {/* name and image */}
                        <div className='w-2/3 h-full  flex flex-col  '> 
                            <h1 className='w-11/12 h-10 text-3xl max-md:text-2xl uppercase text-end p-2'>{result?.id} {result?.name}</h1>
                            <div className='w-full flex justify-end '>
                                <img className='w-2/3 max-md:w-fit' src={mainPic?mainPic:unknownPic} alt="" />
                            </div>
                        </div>

                        {/* stats*/}
                        <div className='h-ful w-1/2 flex-col  max-lg:hidden  pr-12 p-5 pt-12'>
                            <h1 className='text-2xl'>Stats</h1>
                            {result?.stats?.map(st=>{
                                return(
                                    <div className='text-sm'>
                                        {st.stat.name} : {st.base_stat}
                                    </div>
                                )
                            })
                            }
                            <div className='text-sm'>base_experience : {result?.base_experience}</div>
                            <div className='text-sm'>Height : {result?.height}</div>
                            <div className='text-sm'>Weight : {result?.weight}</div>
                            <h1>__________</h1>
                            <h1 className='text-xl'>Skills</h1>                            
                            {result?.abilities?.map(sk=>{
                                return(
                                    <div className='text-sm '>
                                            {sk.ability?.name}
                                    </div>
                                    )
                                })
                            }
                              <div className='w-full h-12 mt-3 flex flex-col justify-start gap-4 '>
                                {result?.types?.map(ty=>{
                                        return(
                                            <div className=' rounded-md p-2 w-20 text-center  shadow-lg'>
                                                {ty?.type?.name}
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>
                        
                </div>

            </>
        )
    }
    
    
 
    return ( 
        <>
        <div className='w-4/5 p-3 ml-2 pb-12 rounded-2xl h-full border max-sm:hidden '>
                {/* //search div */}
                <div className='w-full  h-1/6 pt-5 pb-3 flex  justify-center max-md:justify-start '>
                    <form className='flex w-1/3 h-11 gap-1 mt-2' action="">
                    <input  onChange={(e) =>(setSearchKey(e.target.value))} className=" w-64 h-full p-2  opacity-70 rounded-xl border-2 "  type="text" name='search' placeholder='Search' required/>
                    <button onClick={searchNow} className='border-2 rounded-xl pl-3 pr-3 bg-gray-100 hover:bg-purple-200  h-full' >Search</button>
                    </form>
                </div>

                {/* //Info div */}
                {result&&mtResult()}
        </div>
        </>
     );
}
 
