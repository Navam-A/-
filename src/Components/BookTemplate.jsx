import React from 'react'

export default function BookTemplate({path, title, author, price}) {
    return (
    <div className='my-3 w-[250px] h-[300px] flex justify-center hover:animate-pulse '>
        <figure className='w-44 h-64 mx-auto'>
            <img className='w-full h-3/4 rounded-md' src={path} alt={`${path} Image`} />
            <figcaption>
                <h6 className='font-light'>{author}</h6>
                <h3 className='font-semibold my-1'>{title}</h3>
                <h5 className=''>₹ {price}</h5>
            </figcaption>
        </figure>
    </div>
  )
}
