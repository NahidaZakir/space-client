import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { useState, useEffect } from 'react';
const Update = () => {

    return (
        <div className='flex justify-center flex-col'>
            <h2 className='text-5xl font-bold text-center'>Please Update</h2>
            <form className=''>
                <div className='flex justify-center mx-auto' >

                    <textarea name="reviewText" className="textarea textarea-bordered h-24 w-4/5 mt-5 text-black" placeholder="Edit Review"></textarea>

                </div>
                <div className='text-center mt-5 mb-5'>
                    <button className='btn ' type="submit">Update Review</button>
                </div>

            </form>
        </div >
    );
};

export default Update;