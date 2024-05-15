import { Link } from 'react-router-dom';
import Slider from '../../Components/Slider/Slider';
import RecentQueries from '../../Components/RecentQueries/RecentQueries';

const Home = () => {
    return (
        <div className=''>
            <Slider></Slider>
            <div className="my-24 text-center rounded-md max-w-7xl py-4 space-y-4 mx-auto bg-gradient-to-r from-[#CDE8E5] to-[#7AB2B2]">
                <p className='text-5xl font-bold text-black'>Discover More: Explore All Queries</p>
                <Link to="/queries" className='btn text-2xl'>Explore Now</Link>
            </div>
            <RecentQueries></RecentQueries>
            <div className='max-w-7xl mx-auto mt-8'>
                <div className="collapse collapse-arrow bg-transparent border">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">
                        How do I add a query about a product?
                    </div>
                    <div className="collapse-content">
                        <p>To add a query about a product, simply navigate to the "My Queries" section of the website and fill out the required fields, including the product name, query details, and any additional information you'd like to include. Once submitted, your query will be visible to other users for viewing and discussion.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I update or edit my query after submitting it?
                    </div>
                    <div className="collapse-content">
                        <p> Yes, you can update or edit your query at any time by accessing the "My Queries" section of your account dashboard. From there, you'll be able to make changes to your query details and save your updates for others to see.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-transparent border">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">
                        Can I delete my own recommendations from the system
                    </div>
                    <div className="collapse-content">
                        <p>Yes, you have the ability to delete your own recommendations from the system. Simply navigate to the "My Recommendations" section of your account dashboard, locate the recommendation you'd like to remove, and select the option to delete it.</p>
                    </div>
                </div>

            </div>
            <div className='flex justify-center mx-auto max-w-7xl mt-8'>
                <div className="stats stats-vertical lg:stats-horizontal shadow border w-full">
                    <div className="stat text-center">
                        <div className="stat-title">Queries</div>
                        <div className="stat-value">31K</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">Recommendation</div>
                        <div className="stat-value">50k</div>
                        <div className="stat-desc">Jan 1st - Feb 1st</div>
                    </div>

                    <div className="stat text-center">
                        <div className="stat-title">New Registers</div>
                        <div className="stat-value">1,200</div>
                        <div className="stat-desc">↘︎ 90 (14%)</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;