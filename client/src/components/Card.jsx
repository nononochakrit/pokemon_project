import React, { useState,useContext } from 'react';
import poke from '../Images/Pokemon-login.png'
import unknownPic from '../Images/unknownPic.png'
import InfoPopup from './InfoPopup';
import { createContext } from 'react';

const Card = ({pokemon,loading}) => {
    const [index,setIndex]=useState([]);
    const [popUpCon,setPopupCon]= useState(false);
    



    const popUp=(poke)=>{
        const pokeInfo=poke;
        let mainPic=poke.sprites?.other?.home?.front_default;
        return ( 
            <>
                <div >
                    <div className="h-3/6 w-3/6 z-10 flex-col absolute translate-x-1/4 translate-y-1/4 ">
                    {/* name */}
                        <div className=" rounded-t-lg w-full flex flex-row justify-end h-[70px] pt-5 pr-5 pb-2 bg-green-200">
                            <h1 className="text-2xl text-center translate-x-10 w-full uppercase">{pokeInfo?.name}</h1>
                            <button onClick={()=>{setPopupCon(false)}} className="border-2 border-gray-700 hover:text-white hover:bg-black m-2 hover:border-white w-20">-</button>
                        </div>
                    
                    {/* body */}
                        <div className="w-full gap-2 rounded-b-lg flex h-[450px] p-3 bg-blue-300">
                            {/* img div */}
                            <div className="w-2/3 h-ful flex flex-col  bg-white">
                                <img className="w-[350px] translate-x-20" src={mainPic?mainPic:unknownPic} alt="" />
                                <div className="w-full h-20 border-3 flex justify-center gap-3  ">
                                </div>
                            </div>
                            {/* stat div */}
                            <div className="w-1/3 h-full flex flex-col border pl-5 pr-8 pt-2">
                                <h1 className='translate-x-1/3'>STATS</h1>
                                {pokeInfo?.stats?.map(st=>{
                                    return(
                                        <div >
                                            {st?.stat?.name} : {st?.base_stat}
                                        </div>
                                    )
                                })
                                }
                                <div >base_experience : {pokeInfo?.base_experience}</div>
                                <div >height : {pokeInfo?.height}</div>
                                <div >weight : {pokeInfo?.weight}</div>
                                <h1 className='translate-x-1/3'>SKILLS</h1>                            
                                {pokeInfo?.abilities?.map(sk=>{
                                    return(
                                        <div >
                                                {sk?.ability?.name}
                                        </div>
                                        )
                                    })
                                }
                                {/* type div */}
                                <div className="w-full h-10 flex bg-pink-500 m-2 p-2">
                                <h2>Type : </h2>
                                {pokeInfo?.types?.map(ty=>{
                                        return(
                                            <div className='ml-1'>
                                                {ty?.type?.name}
                                                
                                            </div>
                                        )
                                    })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
         );       
    }

    return ( 
        <>
            {popUpCon&&popUp(index)}
            {
                loading? <h1>Loading...</h1>:
                
                pokemon?.map((item)=>{
                    const showInfo=()=>{
                        setIndex(item)
                        setPopupCon(true)
                        console.log(item.name);
                        //console.log(item.name)
                    }
                    let mainPic=item?.sprites?.other?.home?.front_default;
                    return(

                            <div onClick={showInfo} className='pb-5  ml-8 flex-col hover:scale-110  w-56 h-64 rounded-xl border-2 shadow-lg bg-gray-50 max-sm:hidden'>
                                {/* name */}
                                <div className='h-1/6 pt-2 w-full bg-gray-100'>
                                    <h1 className='text-center'>{item?.id}. {item?.name}</h1>
                                </div>

                                {/* image */}
                                <div className='h-4/6 w-full mb-1 flex justify-center'>
                                    <img className='h-full' src={mainPic?mainPic:unknownPic} alt="" />
                                </div>

                                {/* type element */}
                                <div  className='w-full h-1/6 flex justify-center gap-3'>
                                {item?.types?.map(ty=>{
                                    return(
                                        
                                        <div className={'border rounded-md p-2'}>
                                            {ty?.type?.name}
                                        </div>
                                        
                                    )
                                })
                                }
                
                                </div>

                                
                            </div>
                        
                    )
                })
                
            }

        </>
     );
}
 
export default Card;