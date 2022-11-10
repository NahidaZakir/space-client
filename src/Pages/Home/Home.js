import React, { useEffect, useState } from 'react';
import './Home.css';
import { FaMobileAlt } from 'react-icons/fa';
import serviceBg from '../../Assets/service-bg.jpg'
import { Link } from 'react-router-dom';
import { FaArrowAltCircleRight } from 'react-icons/fa';
import ServiceCard from '../Services/ServiceCard';
import AboutUs from '../AboutUs/AboutUs';
import Statictics from '../Statistics/Statictics';
const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div id='show_home_bg' className='min-h-screen flex justify-center text-center flex-col'>
                <h3 className='text-4xl md:text-9xl mt-10 mb-5 font-bold'>Cleaning your <br></br>worries away</h3>
                <div className='flex justify-center'>
                    <button className='btn  w-2/5 text-xl mt-8'><FaMobileAlt className='text-xl'></FaMobileAlt>  Call Us: 01861260597</button>
                </div>
            </div>

            <AboutUs></AboutUs>


            <div className=''>
                <h2 className='text-center text-5xl font-bold pt-10 mb-10'>Our Services</h2>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                <div className='mt-10 pb-10 text-center'>
                    <Link to='/services'><button className='btn'>See All Services</button></Link>
                </div>
            </div>

            <Statictics></Statictics>

        </div>
    );
};

export default Home;