import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';

function RecipeCards({ data }) {
    const [heart, setHeart] = useState(true)

    const { id, name, photo, ingredients, cookingMethod, rating } = data

    const favorite = () => {
        setHeart(!heart)
        toast.error('Added to favorite', {
            icon: "🤍",
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    return (
        <div className='shadow-lg shadow-red-300 rounded-xl'>
            <LazyLoadImage effect="blur" className='h-[40%] w-full rounded-xl' src={photo} alt="" />
            <div className='px-4'>
                <h3 className='text-3xl font-semibold py-4 text-red-500'>{name}</h3>
                <h5 className='text-xl font-semibold'>Ingredients:</h5>
                <div className='flex justify-center gap-48'>
                    <div className='text-lg'>
                        <p>1. {ingredients[0]}</p>
                        <p>2. {ingredients[1]}</p>
                        <p>3. {ingredients[2]}</p>
                    </div>
                    <div className='text-lg'>
                        <p>4. {ingredients[3]}</p>
                        <p>5. {ingredients[4]}</p>
                        <p>6. {ingredients[5]}</p>
                    </div>
                </div>
                <p className='text-xl font-semibold mt-6'>Cooking Method: <br />
                    <span className='text-base font-normal'>
                        {cookingMethod.slice(0, 200)}... <span className='text-sm underline text-blue-700 cursor-pointer'>Read More</span>
                    </span>
                </p>
                <p className='text-xl font-semibold mt-6'>Ratings: {rating}</p>
                <div className='flex justify-center items-center mt-4 -mb-24 text-red-500' >
                    <button onClick={favorite} className='text-4xl' disabled={!heart}>
                        {
                            heart ? <AiOutlineHeart /> : <AiFillHeart />
                        }
                    </button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}

export default RecipeCards