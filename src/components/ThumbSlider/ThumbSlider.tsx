import "./ThumbSlider.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperCore } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs, Scrollbar } from "swiper/modules";
import { useState, FC } from "react";

export interface ThumbsSwiperProps {
	image: string;
}

const ThumbSlider: FC<ThumbsSwiperProps> = ({ image }) => {
	const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);

	return (
		<>
			<div className="slider-th">
				<Swiper
					style={
						{
							"--swiper-navigation-color": "#fff",
							"--swiper-pagination-color": "#fff",
						} as React.CSSProperties
					}
					loop={true}
					spaceBetween={10}
					thumbs={{ swiper: thumbsSwiper }}
					modules={[FreeMode, Navigation, Thumbs]}
					className="mySwiper2"
				>
					{[...new Array(4)].map((_, i) => {
						return (
							<SwiperSlide key={i}>
								<img src={image} alt={`Slide ${i}`} />
							</SwiperSlide>
						);
					})}
					
				</Swiper>

				<Swiper
					onSwiper={setThumbsSwiper}
					loop={true}
					spaceBetween={10}
					slidesPerView={4}
					freeMode={true}
					watchSlidesProgress={true}
					modules={[FreeMode, Navigation, Thumbs, Scrollbar]}
					className="mySwiper"
				>
					{[...new Array(4)].map((_, i) => {
						return (
							<SwiperSlide key={i}>
								<img src={image} alt={`Slide ${i}`} />
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>
		</>
	);
};

export default ThumbSlider;
