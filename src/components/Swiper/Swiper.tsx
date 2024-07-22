import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination} from 'swiper/modules';
// Import Swiper styles
import "swiper/css";
import "./Swiper.scss";
import 'swiper/css/pagination';
import { Link } from "react-router-dom";
const SwiperBlock: FC = () => {
	
	return (
		<div className="swiper-block">
			<div className="swiper-block__container">
				<Swiper
					spaceBetween={20}
					slidesPerView={1}
                    loop={true}
                    pagination={{
                        clickable: true,
                      }}
                     
                      modules={[Pagination]}
				>
					<SwiperSlide>
						<div className="swiper-block__slide">
							<img src="/img/slider/slider1.png" alt="" />
                            <div className="swiper-block__content">
                                <h3 className="swiper-block__title">Gold big hoops </h3>
                                <div className="swiper-block__price">$ 68,00</div>
                                <Link to='/shop/1'><button className="swiper-block__button">View Product</button>  </Link>
                            </div>
                            
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-block__slide">
							<img src="/img/slider/slider2.png" alt="" />
                            <div className="swiper-block__content">
                                <h3 className="swiper-block__title">Golden Watch </h3>
                                <div className="swiper-block__price">$ 120,00</div>
                                <Link to='/shop/2'><button className="swiper-block__button">View Product</button>  </Link>
                            </div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-block__slide">
							<img src="/img/slider/slider1.png" alt="" />
                            <div className="swiper-block__content">
                                <h3 className="swiper-block__title">Gold big hoops </h3>
                                <div className="swiper-block__price">$ 68,00</div>
                                <Link to='/shop/1'><button className="swiper-block__button">View Product</button>  </Link>
                            </div>
                            
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="swiper-block__slide">
							<img src="/img/slider/slider2.png" alt="" />
                            <div className="swiper-block__content">
                                <h3 className="swiper-block__title">Golden Watch </h3>
                                <div className="swiper-block__price">$ 120,00</div>
                                <Link to='/shop/2'><button className="swiper-block__button">View Product</button>  </Link> 
                            </div>
						</div>
					</SwiperSlide>
					
				</Swiper>
			</div>
		</div>
	);
};

export default SwiperBlock;
