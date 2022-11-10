import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css'
const ReviewCard = ({ review }) => {
    const { reviewerName, text, reviewerImage } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body bg-violet-300 rounded">
                <div className='flex justify-between items-center'>
                    <h2 className="card-title">{reviewerName}</h2>
                    <img className='reviewer-img' src={reviewerImage} alt="" />
                </div>

                <div className='flex flex-row'>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <p className='text-black'>{text}</p>
            </div>

        </div>

    );
};

export default ReviewCard;