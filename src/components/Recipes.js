import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

function Recipes() {
    const chefData = useLoaderData();

    const { id, name, image, experiences, likes, recipes, description } = chefData

    return (

        <>
            {/* Banner Section */}
            <section className='recipe flex justify-center gap-20 py-20'>
                <div className='text-white'>
                    <h3 className='text-7xl font-semibold py-4 font-serif'>{name}</h3>
                    <h5 className='text-2xl'>Experience: {experiences}</h5>
                    <p className='text-2xl'>Total Recipe: {recipes}</p>
                    <p className='text-2xl'>Likes: {likes}</p>
                    <h5 className='max-w-2xl text-lg text-gray-300 my-8'>{description}</h5>
                </div>
                <img className='h-96 w-[25%] rounded-full' src={image} alt="" />
            </section>
        </>
    )
}

export default Recipes