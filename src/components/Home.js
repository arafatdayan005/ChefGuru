import React from 'react'

function Home() {
    return (
        <>
            <section className='banner flex justify-center items-center'>
                <div className='heading text-white text-center'>
                    <h1 className='text-red-500 text-8xl font-extrabold tracking-tighter'>THAI CHEFS</h1>
                    <h4 className='sub-heading text-white text-5xl tracking-normal'>Right At Your Doorstep</h4>
                    <button className='w-2/5 bg-red-500 text-white py-4 mt-6 font-bold rounded-xl hover:bg-red-600'>Call Us Now</button>
                </div>
            </section>
        </>
    )
}

export default Home