import React from 'react'
import {genres} from '../assets/constants.js'

function Discover() {
console.log(genres)  
const genreTitle = 'Pop';
return (
    <div className='flex flex-col'>
        <div className="w-full flex justify-between items-center flex-col sm:flex-row mb-0 mt-1">
            <h2 className='text-white font-bold text-3xl text-left'>Discover {genreTitle}</h2>
            <select name="" id="">

            </select>
        </div>
    </div>
  )
}

export default Discover