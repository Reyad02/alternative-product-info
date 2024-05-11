import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import { Typewriter } from 'react-simple-typewriter'


const Slider = () => {


    return (
        <div>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div  className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/15D50vPC/modern-desk-flat-lay-989064-1004.avif)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className='text-5xl font-bold' style={{ paddingTop: '5rem', margin: 'auto 0' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Discover, Discuss, and Decide on the Best Tech Products!!!', 'Explore a vibrant community of tech enthusiasts sharing insights, recommendations, and discussions on the latest gadgets and gear', 'Join the Discussion']}
                                            loop={5}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/QN0F948p/Camera-Tech-Cover-photo.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className='text-5xl font-bold' style={{ paddingTop: '5rem', margin: 'auto 0' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Unleash Your Creativity with Alternative Camera Options', 'Join a community of shutterbugs sharing tips, tricks, and camera recommendations', 'Find Your Perfect Camera']}
                                            loop={5}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/mk5ZdnkJ/61ec7130-2244-11ee-aecb-e977b4a61764.jpg)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className='text-5xl font-bold' style={{ paddingTop: '5rem', margin: 'auto 0' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Boost Productivity with Alternative Laptop Solutions', 'Explore a variety of laptop alternatives recommended by tech enthusiasts', 'Find Your Next Laptop']}
                                            loop={5}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.postimg.cc/zXyGLqPr/phones-switch-apps.webp)' }}>
                        <div className="hero-overlay bg-opacity-60"></div>
                        <div className="hero-content text-center text-neutral-content">
                            <div className="max-w-3xl">
                                <h1 className='text-5xl font-bold' style={{ paddingTop: '5rem', margin: 'auto 0' }}>
                                    <span style={{ fontWeight: 'bold' }}>
                                        <Typewriter
                                            words={['Find Your Perfect Mobile Phone Alternative', 'From flagship models to budget friendly options, explore alternatives that fit your lifestyle', 'Discover Alternatives']}
                                            loop={5}
                                            cursor
                                            cursorStyle='|'
                                            typeSpeed={70}
                                            deleteSpeed={50}
                                            delaySpeed={1000}
                                        />
                                    </span>
                                </h1>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;