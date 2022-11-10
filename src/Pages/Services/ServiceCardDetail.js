import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaStar } from 'react-icons/fa';
import ReviewCard from '../Review/ReviewCard';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './ServiceCard.css';
const ServiceCardDetail = () => {
    const { user } = useContext(AuthContext);
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
        <div className=' bg-white'>
            <h1 className='text-5xl mt-5 mb-5  font-bold text-center '>Service Detail</h1>
            <div className="card lg:card-side bg-violet-300 shadow-xl mr-20 ml-20 mb-20 ">
                <div className='w-1/2'>
                    <figure><img className="service-detail-image rounded" src={image} alt="Album" /></figure>
                </div>

                <div className="card-body w-1/2">
                    <h2 className="card-title font-semibold text-5xl justify-center mb-5">{name}</h2>
                    <p className='text-justify'>{description}</p>
                    <p>Price: ${price} </p>

                    <p className='flex flex-row justify-start items-center'>Rating: {rating} <span className='ml-2'><FaStar></FaStar></span></p>
                </div>
            </div>







            <div className=' pb-10 bg-white'>
                <h1 className=' text-center text-5xl mt-10 font-bold mb-10'>Reviews</h1>
                <div className='flex justify-center'>
                    <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            remaining.map(rem => <ReviewCard key={rem._id} review={rem}></ReviewCard>)
                        }
                    </div>
                </div>
            </div>

            <div className='flex justify-center pb-10 '>
                <div className='bg-violet-500 rounded-lg'>
                    {
                        user?.email ? <Link to={`/addreview/${_id}`}><button className='btn glass font-extrabold text-black'>Add Review</button></Link> : <Link to='/login'><button className='btn glass font-extrabold text-black'>Please Log in to add Review</button></Link>
                    }
                </div>

            </div>
        </div>

    );
};

export default ServiceCardDetail;