import React from 'react'
import image from './../images/about.png'
import cook1 from './../images/cooking-1.jpg'
import cook2 from './../images/cooking-2.jpg'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* Banner Section */}
            <section className='banner flex justify-center items-center'>
                <div className='heading text-white text-center'>
                    <h1 className='text-red-500 text-8xl font-extrabold tracking-tighter'>THAI CHEFS</h1>
                    <h4 className='sub-heading text-white text-5xl tracking-normal'>Right At Your Doorstep</h4>
                    <button className='px-8 bg-red-500 text-white py-4 mt-6 font-bold rounded-full hover:bg-red-600'>Call Us Now</button>
                </div>
            </section>
            {/* Our Story Section */}
            <section className='grid grid-cols-2'>
                <div className='flex justify-center'>
                    <div className='my-28 ps-20'>
                        <h3 className='text-4xl font-bold tracking-tighter text-red-500 mb-8'>Our Story</h3>
                        <h1 className='text-5xl font-bold font-serif '>Traditional and Modern <br /> Service <span className='text-red-500 text-6xl'>Since 1970</span></h1>
                        <p className='w-[85%] inline-block my-8 text-lg text-gray-500'>Have your chefs offer Thanksgiving feast for takeout and get delivery, or keep those family takeout feasts available year-round and email guests around their birthdays with these offering at a small discount. From the best Thai Chefs all around the world.</p>
                        <Link to="/blogs">
                            <button className='px-8 bg-red-500 text-white py-4 font-bold rounded-full hover:bg-red-600'>About Us</button>
                        </Link>
                    </div>
                </div>

                <div className='relative flex justify-center'>
                    <img className='absolute max-h-[110%] -top-7' src={image} alt="" />
                </div>
            </section>
            {/* Special Deal Section */}
            <section className='my-20'>
                <div className='text-center'>
                    <h3 className='text-4xl font-bold tracking-tighter text-red-500'>Special Deal</h3>
                    <h1 className='w-[50%] inline-block text-5xl font-bold font-serif my-8'>Check Our All Flavours Summer Promo</h1>
                </div>

                <div className='grid grid-cols-2 gap-10 my-12'>
                    <div className='flex justify-end'>
                        <img className='max-w-[90%] h-full rounded-xl' src={cook1} alt="" />
                    </div>
                    <div>
                        <div className='max-w-[90%] h-full p-12 shadow-xl rounded-xl'>
                            <h3 className='text-4xl font-serif font-semibold mb-6'>Over <span className='text-red-500 text-5xl'>250</span> Delicious & Tasty Recipes</h3>
                            <h4 className='text-2xl tracking-tighter font-semibold text-red-500'>Get 25% Discount</h4>
                            <h5 className='my-6 text-lg text-gray-500'>Our thai chefs are packed with energy and enthusiasm. Your dinner spread will never look, smell, or better. The recipes are for all seasons perfect for family gatherings and events</h5>
                            <button className='px-8 bg-red-500 text-white py-4 font-bold rounded-full hover:bg-red-600 mt-4'>Order now</button>
                        </div>
                    </div>
                    <div className='flex justify-end'>
                    <div className='max-w-[90%] h-full p-12 shadow-xl rounded-xl'>
                            <h3 className='text-4xl font-serif font-semibold mb-6'>Over <span className='text-red-500 text-5xl'>250</span> Delicious & Tasty Recipes</h3>
                            <h4 className='text-2xl tracking-tighter font-semibold text-red-500'>Get 25% Discount</h4>
                            <h5 className='my-6 text-lg text-gray-500'>Our thai chefs are packed with energy and enthusiasm. Your dinner spread will never look, smell, or better. The recipes are for all seasons perfect for family gatherings and events</h5>
                            <button className='px-8 bg-red-500 text-white py-4 font-bold rounded-full hover:bg-red-600 mt-4'>Order now</button>
                        </div>
                    </div>
                    <img className='max-w-[90%] h-full rounded-xl' src={cook2} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home