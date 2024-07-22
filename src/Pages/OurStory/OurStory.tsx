import { FC } from "react";
import "./OurStory.scss";
const OurStory: FC = () => {
	return (
		<div className="about-us">
			<div className="about-us__container">
				<div className="about-us__row">
					<h2 className="about-us__title">About</h2>
					<h3 className="about-us__sub-title">
						Who we are and why we do what we do!
					</h3>
					<div className="about-us__content content-about">
						<div className="content-about__text">
							Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
							sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
							eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
							magna et, placerat urna. Curabitur eu magna enim. Proin placerat
							tortor lacus, ac sodales lectus placerat quis.
						</div>
						<div className="content-about__title">Top trends</div>
						<div className="content-about__image">
							<img src="/img/about/01.jpg" alt="" />
						</div>
						<div className="content-about__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							placerat, augue a volutpat hendrerit, sapien tortor faucibus
							augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
							facilisis consequat sed eu felis.
						</div>
						<ul className="content-about__list">
							<li>consectetur adipiscing elit. Aliquam placerat</li>
							<li>Lorem ipsum dolor sit amet consectetur </li>
						</ul>
						<div className="content-about__title">Produced with care</div>
						<div className="content-about__image">
							<img src="/img/about/02.jpg" alt="" />
						</div>
						<div className="content-about__text">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
							placerat, augue a volutpat hendrerit, sapien tortor faucibus
							augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu
							facilisis consequat sed eu felis. Nunc sed porta augue. Morbi
							porta tempor odio, in molestie diam bibendu.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default OurStory;
