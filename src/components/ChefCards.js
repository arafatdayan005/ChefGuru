import React from 'react'

function ChefCards({ data }) {
    const { name, image, experiences, likes, recipes } = data
    return (
        <div className='product text-white mb-8'>
            <img className='h-[70%] w-full rounded-xl' src={image} alt="" />
            <div className='flex relative'>
                <div>
                    <h3 className='text-4xl font-semibold py-4'>{name}</h3>
                    <h5 className='text-xl'>Experience: {experiences}</h5>
                    <p className='text-xl'>Total Recipe: {recipes}</p>
                    <p className='text-xl'>Likes: {likes}</p>
                </div>
                <div className='absolute bottom-0 right-0'>
                    <button className='px-8 bg-white text-red-500 py-4 font-bold rounded-full hover:bg-red-400 hover:text-white'>View Recipes</button>
                </div>
            </div>

        </div>
    )
}

export default ChefCards