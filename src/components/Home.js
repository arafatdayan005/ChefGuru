import React from 'react'
import image from './../images/about.png'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <>
            {/* Banner Section */}
            <section className='banner flex justify-center items-center'>
                <div className='heading text-white text-center'>
                    <h1 className='text-red-500 text-8xl font-extrabold tracking-tighter'>THAI CHEFS</h1>
                    <h4 className='sub-heading text-white text-5xl tracking-normal'>Right At Your Doorstep</h4>
                    <button className='px-8 bg-red-500 text-white py-4 mt-6 font-bold rounded-xl hover:bg-red-600'>Call Us Now</button>
                </div>
            </section>
            {/* Our Story Section */}
            <section className='grid grid-cols-2'>
                <div className='flex justify-center'>
                    <div className='my-28 mb-36 ps-20'>
                        <h3 className='text-4xl font-bold tracking-tighter text-red-500 mb-8'>Our Story</h3>
                        <h1 className='text-5xl font-bold font-serif '>Traditional and Modern <br /> Service <span className='text-red-500 text-6xl'>Since 1970</span></h1>
                        <p className='w-[85%] my-8 text-lg text-gray-500'>Have your chefs offer Thanksgiving feast for takeout and get delivery, or keep those family takeout feasts available year-round and email guests around their birthdays with these offering at a small discount. From the best Thai Chefs all around the world.</p>
                        <Link to="/blogs">
                            <button className='px-8 bg-red-500 text-white py-4 font-bold rounded-xl hover:bg-red-600'>About Us</button>
                        </Link>
                    </div>
                </div>

                <div className='relative flex justify-center'>
                    <img className='absolute max-h-[110%] -top-7' src={image} alt="" />
                </div>
            </section>
        </>
    )
}

export default Home