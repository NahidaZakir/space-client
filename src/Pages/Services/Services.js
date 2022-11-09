import React from 'react';
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

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
            <h1>this is service</h1>
            {
                services.map(service => <p>{service.name}</p>)
            }

        </div>
    );
};

export default Services;