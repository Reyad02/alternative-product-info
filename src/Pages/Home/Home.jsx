import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <div className="my-24 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-purple-400 to-pink-400">
                <p className='text-5xl font-bold text-black'>Discover More: Explore All Queries</p>
                <Link className='btn text-2xl'>Explore Now</Link>
            </div>

        </div>
    );
};

export default Home;