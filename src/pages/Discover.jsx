import React from 'react'
import {genres} from '../assets/constants.js'
import SongCard from '../components/SongCard'

function Discover() {
console.log(genres)  
const genreTitle = 'Pop';
return (
    <div className='flex flex-col'>
        {/* todo check flex */}
        <div className="w-full flex justify-between items-center  md:flex-col   mb-10 mt-4">
            <h2 className='text-white font-bold text-3xl text-left'>Discover {genreTitle}</h2>
            <select onChange={()=>{}} value="" className='bg-black text-gray-300 p-3 text-sm rounded-lg outline-none sm:mt-0 mt-5 px-6'  name="" id="">
                {genres.map((genre,index)=>(
                    <option key={index} value={genre.value}> {genre.title}</option>
                ))}
            </select>
        </div>
        <div className='flex flex-wrap justify-start md:justify-center gap-8'>
                    {[1,2,3,4,5,6,7,8,9,10].map((songs,i)=>(
                        <SongCard 
                        key={songs.key}
                        song={songs}
                        i={i}
                        />
                    ))}
        </div>
    </div>
  )
}

export default Discover