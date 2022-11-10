import React, { useEffect, useState } from 'react';
import './ServiceCard.css';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const ServiceCard = ({ service }) => {
    const { name, _id, price, description, rating, image } = service;

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">

                <figure><img className='service-image' src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description.slice(0, 100)} ...</p>
                    <div className='flex justify-center'>
                        <p>Price: $ {price}</p>
                        <div className='flex items-center'>
                            <p className='mr-3'>Rating: {rating}  </p>
                            <FaStar></FaStar>
                        </div>
                    </div>


                    <div className="card-actions justify-end">
                        <Link to={`/services/${_id}`}><button className="btn">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default ServiceCard;