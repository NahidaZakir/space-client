import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaMobileAlt } from 'react-icons/fa';
import serviceBg from '../../Assets/service-bg.jpg'
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div >

            <div id='show_home_bg' className='min-h-screen flex justify-center text-center flex-col'>
                <h3 className='text-4xl md:text-9xl mt-10 mb-5 font-bold'>Cleaning your <br></br>worries away</h3>
                <div className='flex justify-center'>
                    <button className='btn  w-2/5 text-xl mt-8'><FaMobileAlt className='text-xl'></FaMobileAlt>  Call Us: 01861260597</button>
                </div>
            </div>

            <div className='w-full bg-violet-400'>
                <h1 className='text-5xl text-center text-base-100 pt-10 pb-10 font-bold'>Our Services</h1>
                <div className='grid grid-rows-1 grid-col-1 md:grid-col-2'>
                    <div >
                        <ul className='text-center font-semibold'>
                            {
                                services.map(service => <li className='text-3xl'>{service.name}</li>)
                            }
                        </ul>
                    </div>
                    <div>
                        <img src={serviceBg} alt="" />
                    </div>


                </div>

            </div>
        </div>
    );
};

export default Home;