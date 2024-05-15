import { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const [isDarkMode, setDarkMode] = useState(false);

    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/queries">Queries</NavLink></li>
        {user && <>
            <li><NavLink to="/recommendations">Recommendations</NavLink></li>
            <li><NavLink to="/myqueries">My Quires</NavLink></li>
            <li><NavLink to="/myRecommendations">My Recommendations</NavLink></li>

        </>}
    </>

    const handleLogout = () => {
        logout().then(() => {
            // Sign-out successful.
            console.log("Successfully logged out")
        }).catch((error) => {
            // An error happened.
            console.log("error");
        });
    }

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setDarkMode(newMode);
        document.querySelector('html').setAttribute('data-theme', newMode ? "dracula" : "cupcake");
    }
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}
                        </ul>
                    </div>
                    <Link to="/" className="btn btn-ghost text-xl hidden md:flex">TopTech</Link>
                </div>
                <div className="navbar-center hidden lg:flex justify-center ">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>

                <div className="navbar-end gap-4 items-center">
                    <div className="" onClick={toggleDarkMode}>
                        <label className="flex cursor-pointer gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></svg>
                            <input type="checkbox" value="synthwave" className="toggle theme-controller" />
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
                        </label>
                    </div>
                    <div>
                        {
                            (user && <a className="btn" onClick={handleLogout}>Logout</a>) || <Link className='btn' to="/login">Login</Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;