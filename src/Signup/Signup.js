import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/AuthProvider/AuthProvider';
const Signup = () => {
    const { createUser, loading } = useContext(AuthContext);
    if (loading) {
        <button className="btn loading">loading</button>
    }
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then((result) => {

            })
            .catch((error) => {
                console.log(error);
            })

    }
    return (
        <div className="hero w-full my-10">
            <div className="card flex-shrink-0 w-2/5 shadow-2xl bg-violet-400 py-20 ">
                <h1 className="text-5xl text-center font-bold">Sign up on Space</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Name" className="input input-bordered" />

                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" />

                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-base-200" type="submit" value="Sign Up" />
                    </div>
                </form>
                <p className='text-center'>Already have an account? <Link className='font-bold' to="/login">  Log in</Link></p>
            </div>
        </div >

    );
};

export default Signup;