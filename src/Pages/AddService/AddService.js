import React, { useCallback, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../Hooks/useTitle';

const AddService = () => {
    const { user } = useContext(AuthContext);
    
    return (
        <div className='flex justify-center pb-10 '>
            <div className='bg-violet-500 rounded-lg mt-40 mb-40'>
                {
                    user?.email ? <Link to='/addservice'><button className='btn glass font-extrabold text-black'>Add Service</button></Link> : <Link to='/login'><button className='btn glass font-extrabold text-black'>Please Log in to add Service</button></Link>
                }
            </div>

        </div>
    );
};

export default AddService;