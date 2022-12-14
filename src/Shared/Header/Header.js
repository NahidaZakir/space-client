import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo.png';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const menuItems = <>
        < li className='font-semibold'><Link to='/'>Home</Link></ li>
        <li className='font-semibold mr-3'><Link to='/services'>Services</Link></li>
        <li className='font-semibold mr-3'><Link to='/blogs'>Blogs</Link></li>


    </>

    return (
        <div>
            <div className="navbar  bg-violet-400 text-primary-content">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-violet-400  rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <div className='flex flex-row'>
                        <img className='logo-size mx-3' src={logo}></img>
                        <h1 className='text-3xl font-bold'>Space</h1>
                    </div>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>
                <div className="navbar-end ">

                    {
                        user?.uid ? <>
                            <Link className='font-semibold mr-3' to='/myreviews'>My Reviews</Link>
                            <Link className='font-semibold mr-3' to='/addservice'>Add Service</Link>
                            <Link className='font-semibold'><btn onClick={handleLogOut} className='btn btn-ghost'>Sign Out</btn></Link>
                        </> :
                            <Link to='/login'><btn className='btn btn-ghost'>Login</btn></Link>

                    }
                </div>
            </div>
        </div>
    );
};

export default Header;