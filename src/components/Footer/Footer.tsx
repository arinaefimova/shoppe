import { FC, useState } from "react";
import "./Footer.scss";

import {
	FaFacebookF,
	FaInstagram,
	FaLinkedinIn,
	FaTwitter,
} from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import { Link } from "react-router-dom";
import { Rate } from "antd";

const Footer: FC = () => {
	const [email, setEmail] = useState(""); 
	const [error, setError] = useState("");

	const validateEmail = (email: string) => {
		const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return re.test(email);
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (validateEmail(email)) {
			setError("");
		} else {
			setError("Please enter a valid email address!");
		}
	};
	return (
		<footer className="footer">
           
			<div className="footer__container">
				<div className="footer__row">
					<div className="footer__column-right right-column-footer">
						<nav className="right-column-footer__nav">
							<a  className="right-column-footer__link">CONTACT</a>
							<a className="right-column-footer__link">TERMS OF SERVICES</a>
							<a className="right-column-footer__link">SHIPPING AND RETURNS</a>
						</nav>
						<Link to='/privacy-policy' className="right-column-footer__copy">
							<span>© 2021 Shelly.</span> Terms of use <span>and</span> privacy
							policy.
						</Link>
					</div>
					<div className="footer__column-left left-column-footer">
						<form className="left-column-footer__input" onSubmit={handleSubmit}>
							<div>
                                <input
                                    type="email"
                                    value={email}
                                    onFocus={()=>setError('')}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Give an email, get the newsletter"
                                />
                                <button  type="submit"><HiArrowLongRight /></button>
                            </div>
							{error && <p className="error-message">{error}</p>}
						</form>
						<div className="left-column-footer__socials">
							<FaLinkedinIn size={20} />
							<FaFacebookF size={18} />
							<FaInstagram size={20} />
							<FaTwitter size={20} />
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
