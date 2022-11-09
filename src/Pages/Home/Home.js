import React from 'react';
import './Home.css';
import { FaMobileAlt } from 'react-icons/fa';
const Home = () => {
    return (
        <div >

            <div id='show_home_bg' className='min-h-screen flex justify-center text-center flex-col'>
                <h3 className='text-4xl md:text-9xl mt-10 mb-5 font-bold'>Cleaning your <br></br>worries away</h3>
                <div className='flex justify-center'>
                    <button className='btn  w-2/5 text-xl mt-8'><FaMobileAlt className='text-xl'></FaMobileAlt>  Call Us: 01861260597</button>
                </div>

            </div>
        </div>
    );
};

export default Home;