import React from 'react';
import useApps from '../../Hooks/useApps';
import { useParams } from 'react-router';

import download from '../../assets/icon-downloads.png'
import rating from '../../assets/icon-ratings.png'
import reveiw from '../../assets/icon-review.png'
import Barchart from '../Barchart/Barchart';

const Details = () => {

    const { apps } = useApps()
    const { id } = useParams()
    console.log(apps, id)

    const findedapp = [...apps].find(data => data.id === Number(id))
    const { image, title, ratingAvg, downloads,reviews, ratings } = findedapp || {}
    
    
    return (
        <section className='bg-cyan-50 '>
            <div className=' lg:flex  md:flex gap-6  pt-12'>
                <div className=' overflow-hidden '>
                    <img className=' lg:pl-4 w-[600px]  object-cover   ' src={image} alt="" />

                </div>
                <div className='bg-white max-w-screen lg:w-screen p-8 '>
                    <div>
                        <h1 className='text-4xl font-bold'>{title}</h1>
                        <p className='text-xl mt-1'>Developed by <span className='text-[#834aeb] font-medium'>productive.io</span></p>
                    </div>
                <div className=' grid lg:grid-cols-3 grid-cols-2 '>
                        <div className='mt-10 space-y-2'>
                        <img src={download} alt="" />
                        <p className='text-lg text-[#001931]'>Downloads</p>
                       <h2 className="font-extrabold text-7xl">{Math.round(downloads / 1000000)}M</h2>
                    </div>
                        <div className='mt-10 space-y-2'>
                        <img  src={rating} alt="" />
                        <p className='text-lg text-[#001931]'>Average Ratings</p>
                       <h2 className="font-extrabold text-7xl">{ratingAvg}</h2>
                    </div>
                        <div className='mt-10 space-y-2'>
                        <img src={reveiw} alt="" />
                        <p className='text-lg text-[#001931]'>Total Reviews</p>
                       <h2 className="font-extrabold text-7xl">{Math.round( reviews / 100)}K</h2>
                    </div>
                </div>
                    <button className='mt-5 btn btn-accent px-10 text-white'>Install Now </button>
                </div>
            </div>

            <div className='mt-10'>
             
               <Barchart ratings={ratings}></Barchart>
            </div>
        </section>
    );
};

export default Details;