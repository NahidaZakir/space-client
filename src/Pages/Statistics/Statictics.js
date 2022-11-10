import React from 'react';
import './Statistics.css';
const Statictics = () => {
    return (
        <div className='bg-base-200 pt-20'>
            <h1 className='text-5xl font-bold text-center mt-5 mb-10'>Our Statistics in Last Year</h1>
            <div className='flex justify-center pb-20'>
                <div className='grid gap-10 md:gap-20 lg:gap-30 grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                    <div className='avatar'>
                        <div className="w-60 h-50 stats-img rounded-full">
                            <img className='stats-img ' src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1980&q=80" alt="" />
                            <p className='stats-text text-black font-bold text-4xl  text-center'>1,2456 <br />Orders</p>
                        </div>
                    </div>

                    <div className='avatar'>
                        <div className="w-60 h-50 stats-img rounded-full">
                            <img className='stats-img ' src="https://images.unsplash.com/photo-1519643225200-94e79e383724?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80" alt="" />
                            <p className='stats-text text-black font-bold text-4xl  text-center'>883<br />Clients</p>
                        </div>
                    </div>


                    <div className='avatar'>
                        <div className="w-60 h-50 stats-img rounded-full">
                            <img className='stats-img ' src="https://images.unsplash.com/photo-1532372576444-dda954194ad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzV8fGhvbWV8ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60" alt="" />
                            <p className='stats-text text-black font-bold text-4xl text-center'>315 <br />Houses</p>
                        </div>
                    </div>

                    <div className='avatar'>
                        <div className="w-60 h-50 stats-img rounded-full">
                            <img className='stats-img ' src="https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
                            <p className='stats-text text-black font-bold text-4xl  text-center'>237<br />Followers</p>
                        </div>
                    </div>

                </div>

            </div>
        </div>

    );
};

export default Statictics;