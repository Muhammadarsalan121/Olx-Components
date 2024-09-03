import React from 'react'

function Card({price , description , url , address , time }) {
  return (
    <div className="card card-compact bg-base-100 w-96 shadow-xl mt-5">
  <figure>
    <img
      src={url}
      alt="Shoes" className='w-[350px] h-[350px]' />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Rs {price}</h2>
    <p>{description}</p>
    <p className='mt-3 text-gray-700'>{address}</p>
    <p className='text-xs text-gray-700'>{time}</p>
  </div>
</div>
  )
}

export default Card