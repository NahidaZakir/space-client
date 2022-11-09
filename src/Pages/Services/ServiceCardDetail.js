import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';

const ServiceCardDetail = () => {
    const { name, _id, price, rating, description, image } = useLoaderData();
    return (
        <div className=' bg-violet-400'>
            <div className="card card-compact w-4/5 bg-base-100 shadow-xl mx-auto pt-20 pb-20">
                <div className="card-body rounded">
                    <h2 className="card-title text-5xl ml-20">{name}</h2>
                    <div className='flex flex-col md:flex-row '>
                        <div className="card-actions justify-end w-full md:w-1/3  mx-auto">
                            <figure><img className='service-detail-image' src={image} alt="Shoes" /></figure>
                        </div>
                        <div className='flex flex-col w-full md:w-2/3 pl-5 pr-5'>
                            <p className='text-justify text-2xl'>{description}</p>
                            <div className='flex justify-center mt-5'>
                                <p className='text-2xl'>Price: $ {price}</p>
                                <div className='flex items-center'>
                                    <p className='mr-3 text-2xl'>Rating: {rating}  </p>
                                    <FaStar></FaStar>
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
            </div>
        </div>

    );
};

export default ServiceCardDetail;