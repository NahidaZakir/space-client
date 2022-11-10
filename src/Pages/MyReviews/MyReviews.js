import React, { useEffect, useState } from 'react';
import useTitle from '../../Hooks/useTitle';
import MyReviewCard from '../MyReviewCard/MyReviewCard';
import ReviewCard from '../Review/ReviewCard';

const MyReviews = () => {
    const [reviews, setReviews] = useState([]);
    useTitle('My Reviews');

    useEffect(() => {
        fetch('http://localhost:5000/myreviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data);

            })
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            fetch(`http://localhost:5000/myreviews/${id}`, {
                method: 'DELETE',
                headers: {

                    authorization: `Bearer ${localStorage.getItem('genius-token')}`
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('data deleted');
                        const remaining = reviews.filter(rev => rev._id
                            !== id)
                        setReviews(remaining);
                    }

                })

        }
    }


    const reviewTable = <>
        <div className="overflow-x-auto w-full mt-20 mb-20">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th>
                            Delete
                        </th>
                        <th>Service Details</th>
                        <th>My Review</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <MyReviewCard key={review._id} handleDelete={handleDelete} review={review}></MyReviewCard>)
                    }
                </tbody>

            </table>
        </div>
    </>

    const noReview = <>
        No reviews were added
    </>
    return (
        <div>
            {
                reviews.length === 0 ? <p className='text-3xl font-bold  text-center pt-40 mb-40'>{noReview}</p> : <div>{reviewTable}</div>
            }
        </div>

    );
};

export default MyReviews;