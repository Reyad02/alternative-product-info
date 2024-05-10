import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);
    const navlinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/quires">Queries</NavLink></li>
        {user && <>
            <li><NavLink to="/recommendations">Recommendations</NavLink></li>
            <li><NavLink to="/myQuires">My Quires</NavLink></li>
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
    return (
        <div className='max-w-7xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navlinks}

                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex justify-center">
                    <ul className="menu menu-horizontal px-1">
                        {navlinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        (user && <a className="btn" onClick={handleLogout}>Logout</a>) || <Link to="/login">Login</Link>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;