import Link from 'next/link';
import { useMediaQuery } from 'react-responsive';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
// import backgroundVideo from '../../rsc/Header.mp4';

const Header = () => {
    SwiperCore.use([Navigation, Pagination, Scrollbar, Autoplay, A11y]);
    
    const isJustMob = useMediaQuery({
        query: '(min-device-width: 700px)'
      })

    return (
        <div>
            <Swiper
                spaceBetween={50}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <header className="d-flex align-items-center">
                        <div className="container-xl">
                            <div className="header-contents">
                                <h2 className="slideHeadLine">
                                    GET A QUOTE RIGHT NOW ON {isJustMob?<br/> :""} YOUR NEXT RENOVATION!
                                </h2>
                                <Link href="/contactUs">
                                    <button className="header-contentsButton">Contact Us</button>
                                </Link>
                            </div>
                        </div>
                    </header>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="slider-heder2 d-flex align-items-center">
                            <div className="container-xl">
                                <div className="slider-heder2-contents">
                                    <h2 className="slideHeadLine">
                                        GET A QUOTE RIGHT NOW ON {isJustMob?<br/> :""} YOUR NEXT RENOVATION!
                                    </h2>
                                    <Link href="/contactUs">
                                        <button className="header-contentsButton">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="slider-heder3 d-flex align-items-center">
                            <div className="container-xl">
                                <div className="slider-heder2-contents">
                                    <h2 className="slideHeadLine">
                                        GET A QUOTE RIGHT NOW ON {isJustMob?<br/> :""} YOUR NEXT RENOVATION!
                                    </h2>
                                    <Link href="/contactUs">
                                        <button className="header-contentsButton">
                                            Contact Us
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <style jsx>{`
                .slider-heder2 {
                    background: url('https://i.imgur.com/TKOVvVn.jpg') 0 0 / cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 650px;
                }
                .slider-heder3 {
                    background: url('https://i.imgur.com/2ks8Ugx.jpg') 0 0 / cover;
                    background-repeat: no-repeat;
                    background-position: center;
                    height: 600px;
                }
            `}</style>
        </div>
    );
};

export default Header;
