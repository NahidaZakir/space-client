import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    const { name, _id, price, rating, image, description } = useLoaderData();
    const handleAddReview = event => {
        event.preventDefault();
        const form = event.target;
        const revName = form.fullname.value;
        const revImage = form.imageUrl.value;
        const revtext = form.userReview.value;

        const review = {
            service: _id,
            serviceName: name,
            servicePrice: price,
            serviceRating: rating,
            serviceImage: image,
            serviceDescription: description,
            reviewerName: revName,
            reviewerImage: revImage,
            reviewerText: revtext,
            userEmail: user.email
        }
        fetch('http://localhost:5000/addreview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Review posted successfully');
                    form.reset();
                }
                console.log(data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-violet-200'>
            < div className="card w-3/5 mx-auto text-primary-content" >
                <div className="card-body">
                    <h2 className="card-title text-center my-4 text-4xl">Write A Review</h2>
                    <form onSubmit={handleAddReview} >
                        <div className='grid grid-cols-1  gap-4'>
                            <input name="fullname" type="text" placeholder="Full Name" className="input input-bordered text-black w-full" />

                            <input name="imageUrl" type="text" placeholder="Image URL" className="input input-bordered text-black w-full" />
                        </div>
                        <textarea name="userReview" className="textarea textarea-bordered h-24 w-full mt-5 text-black" placeholder="Your Review"></textarea>

                        <div className='flex justify-center mt-10 mb-10'>
                            <div className='bg-violet-800 rounded-lg'>
                                <input className='btn glass' type="submit" placeholder="Post" />
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        </div>
    );
};

export default AddReview;