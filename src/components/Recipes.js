import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import RecipeCards from './RecipeCards';

function Recipes() {
    const chefData = useLoaderData();

    const { id, name, image, experiences, likes, recipes, description, recipelist } = chefData

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
                    <button className='px-8 bg-white text-red-500 py-4 font-bold rounded-full hover:bg-red-400 hover:text-white'>Contact Me</button>
                </div>
                <img className='h-96 w-[25%] rounded-full' src={image} alt="" />
            </section>

            {/* My Recipes Section */}
            <section className='my-20'>
                <div className='text-center'>
                    <h3 className='text-4xl font-bold tracking-tighter text-red-500'>My Recipes</h3>
                    <h1 className='w-[50%] inline-block text-5xl font-bold font-serif my-8'>Check Some Of My Best Recipes</h1>
                </div>

                <div className='grid grid-cols-3 gap-8 mt-12 px-20'>
                    {
                        recipelist.map(data => (
                            <RecipeCards key={data.name} data={data}></RecipeCards>
                        ))
                    }
                </div>
            </section>
        </>
    )
}

export default Recipes