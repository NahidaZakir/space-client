import React from 'react';
import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ServiceCard from '../Services/ServiceCard';
const Services = () => {
    const [services, setServices] = useState([]);
    
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setServices(data);
            })
    }, [])

    return (
        <div>
            <div className='bg-violet-400'>
                <h2 className='text-center text-5xl font-bold pt-10 mb-10'>Our Services</h2>
                <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>

                <div className='text-center mt-10 pb-10'>

                    <Link to='/addservice'><button className='btn'>Add Service</button></Link>

                </div>
            </div>
        </div>
    );
};

export default Services;