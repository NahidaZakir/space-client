import React from 'react';
import { FaStar } from 'react-icons/fa';
import './ReviewCard.css'
const ReviewCard = ({ review }) => {
    const { reviewerName, text, reviewerImage } = review;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className='flex flex-row justify-between'><h2 className="card-title">{reviewerName}</h2>
                    <img className='reviewer-img' src={reviewerImage} alt=""></img></div>

                <div className='flex flex-row '>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                    <FaStar></FaStar>
                </div>
                <p>{text}</p>

                <div className="card-actions justify-end">


                </div>
            </div>
        </div>
    );
};

export default ReviewCard;