import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewCard from '../Review/ReviewCard';

const ServiceCardDetail = () => {
    const { name, _id, price, rating, description, image } = useLoaderData();
    const [allreviews, setAllReviews] = useState([]);
    const [remaining, setRemaining] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => {
                setAllReviews(data);
                if (allreviews.length > 0) {
                    const remaining = allreviews.filter(review => review.serviceName === name);
                    setRemaining(remaining);
                }
            })
    }, [allreviews, name])
    return (
        <div className=' bg-violet-400'>
            <h1 className='text-5xl font-bold text-center pt-10 mb-10'>Service Detail</h1>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto pt-20 pb-20">
                <div className="card-body rounded">
                    <h2 className="card-title text-5xl ml-20">{name}</h2>
                    <div className='flex flex-col md:flex-row '>
                        <div className="card-actions justify-end w-full md:w-1/3  mx-auto">
                            <figure><img className='service-detail-image' src={image} alt="Shoes" /></figure>
                        </div>
                        <div className='flex flex-col w-full md:w-2/3 pl-5 pr-5'>
                            <p className='text-justify text-xl'>{description}</p>
                            <div className='flex justify-center mt-5'>
                                <p className='text-2xl'>Price: $ {price}</p>
                                <div className='flex items-center'>
                                    <p className='mr-3 text-xl'>Rating: {rating}  </p>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <h1 className=' text-center text-5xl mt-10 mb-10'>Reviews</h1>
                <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        remaining.map(rem => <ReviewCard key={rem._id} review={rem}></ReviewCard>)
                    }
                </div>

            </div>
        </div>

    );
};

export default ServiceCardDetail;