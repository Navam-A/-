import React, { useState } from 'react'

export default function BlogTemplate({img, title}) {
  
  return (
    <div className='w-80 h-64 hover:scale-105 mx-auto my-3 rounded-lg overflow-hidden shadow-lg shadow-gray-500'>
        <figure>
          <img src={img} alt="" className='w-full h-[180px]'/>
          <figcaption>
            <h3 className='p-3 text-lg font-bold'>{title}</h3>
          </figcaption>
        </figure>
    </div>
  )
}
