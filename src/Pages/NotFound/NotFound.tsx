import { FC } from "react";
import "./NotFound.scss";
import { Link } from "react-router-dom";
const NotFound: FC = () => {
	return (
		<div className="not-found">
			<div className="not-found__container">
				<h1 className="not-found__title">404 ERROR</h1>
				<div className="not-found__text">
					This page not found; <br /> back to home and start again
				</div>
				<Link to='/'>
					<button className="not-found__btn">HOMEPAGE</button>
				</Link>
			</div>
		</div>
	);
};

export default NotFound;
