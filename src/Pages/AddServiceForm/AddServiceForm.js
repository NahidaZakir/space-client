import React from 'react';

const AddServiceForm = () => {

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const serName = form.ServiceName.value;
        const serPrice = form.ServiePrice.value;
        const serRating = form.ServiceRating.value;
        const serImage = form.ServiceImageUrl.value;
        const serDescription = form.description.value;

        const service = {
            name: serName,
            price: serPrice,
            rating: serRating,
            image: serImage,
            description: serDescription,
        }
        fetch('http://localhost:5000/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('Service Added successfully');
                    form.reset();
                }
                console.log(data)
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <div className='bg-violet-200'>
                < div className="card w-3/5 mx-auto text-primary-content" >
                    <div className="card-body">
                        <h2 className="card-title text-center my-4 text-4xl">Add Service</h2>
                        <form onSubmit={handleAddService}>
                            <div className='grid grid-cols-1 gap-4'>
                                <input name="ServiceName" type="text" placeholder="Service Name " className="input input-bordered w-full  text-black" />
                                <input name="ServiePrice" type="text" placeholder="Service Price" className="input input-bordered w-full  text-black" />
                                <input name="ServiceRating" type="text" placeholder="Service Rating" className="input input-bordered w-full  text-black" />

                                <input name="ServiceImageUrl" type="text" placeholder="Image URL" className="input input-bordered w-full  text-black" />
                            </div>
                            <textarea name="description" className="textarea textarea-bordered h-24 w-full mt-5  text-black" placeholder="Description"></textarea>

                            <div className='flex justify-center mt-10 mb-10'>
                                <div className='bg-violet-800 rounded-lg'>
                                    <input className='btn glass' type="submit" placeholder="Add Service" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div >
            </div>
        </div>
    );
};

export default AddServiceForm;