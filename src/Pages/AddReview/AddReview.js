import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <form >
                <div className=" text-center my-4 text-4xl">Write A Review</div>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
                    <input name="fullname" type="text" placeholder="Full Name" className="input input-bordered w-full" />
                    <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered w-full" />
                    <input name="phone" type="text" placeholder="Your Phone" className="input input-bordered w-full" required />
                    <input name="email" type="email" placeholder="Your Email" defaultValue={user?.email} className="input input-bordered w-full" readOnly />
                </div>
                <textarea name="message" className="textarea textarea-bordered h-24 w-full" placeholder="Your Message"></textarea>
                <input className='btn w-full' type="submit" placeholder='Order confirm' />
            </form>
        </div>
    );
};

export default AddReview;