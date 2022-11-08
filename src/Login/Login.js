import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className="hero w-full my-10">
            <div className="card flex-shrink-0 w-2/5 shadow-2xl bg-violet-400 py-20">
                <h1 className="text-5xl text-center font-bold">Login To Space</h1>
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn glass" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New to Fresh Space? <Link className='font-bold' to="/signup">  Sign Up</Link></p>
            </div>
        </div >
    );
};

export default Login;