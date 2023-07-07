import React from 'react';
import { useState ,useEffect} from 'react';
import axios from 'axios';
//import file
import Card from './Card';


export default function ShowAll(){

    const [pokeData,setPokeData]=useState([]);
    const [loading,setLoading]=useState(true);
    const [url,setUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [nextUrl,setNextUrl]=useState([]);
    const [prevUrl,setPrevUrl]=useState([]);
    
    //get pokemon api
    const pokeFun=async()=>{
        setLoading(true);
        const res=await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results);
        setLoading(false)
    }
     //get for each pokemon
    const getPokemon=async(res)=>{
        res.map(async(item)=>{
            const result=await axios.get(item.url)
            //console.log(result.data)
            setPokeData(state=>{
                state=[...state,result.data]
                state.sort((a,b)=>a.id>b.id?1:-1)
                return state;
            })
        })
    }

    useEffect(()=>{
        let abortContruller= new AbortController;
        setPokeData([])
        pokeFun();
        return ()=> abortContruller.abort();
    },[url])

    const allPoke = () => {
        return ( 
            <>
            <div className='w-4/5  ml-2 pb-12 rounded-2xl h-full border    '>

                    <div className='h-full pl-4  pt-5 flex flex-wrap overflow-x-scroll gap-y-5 gap-x-5'>
                        <Card pokemon={pokeData}  loading={loading}></Card> 
                    </div>

                    <div className='w-full flex justify-end'>
                    {  prevUrl && <button  onClick={()=>{
                            setPokeData([])
                            setUrl(prevUrl) 
                        }}className='hover:bg-violet-200 p-2 w-36 bg-gray-25 border rounded-2xl text-2xl  text-center max-sm:hidden ' >Previous</button>}

                        { nextUrl && <button onClick={()=>{
                            setPokeData([])
                            setUrl(nextUrl)
                        }}className='hover:bg-violet-200 p-2 w-36 bg-gray-25 border rounded-2xl text-2xl  text-center max-sm:hidden' >Next</button>}

                    </div>
            </div>
            </>
         );
    }

    return(
        <>
            {allPoke()}
        </>
    );
};
