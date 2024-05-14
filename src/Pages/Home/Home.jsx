import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import RecentQueries from '../../Components/RecentQueries/RecentQueries';

const Home = () => {
    return (
        <div className=''>
            {/* <div className='max-w-7xl mx-auto mb-4'>
                <label className="input input-bordered rounded-3xl flex items-center gap-2">
                    <input type="text" className="grow" placeholder="Search" />
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
                </label>
            </div> */}
            <Slider></Slider>
            <div className="my-24 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400">
                <p className='text-5xl font-bold text-black'>Discover More: Explore All Queries</p>
                <Link to="/queries" className='btn text-2xl'>Explore Now</Link>
            </div>
            <RecentQueries></RecentQueries>

        </div>
    );
};

export default Home;