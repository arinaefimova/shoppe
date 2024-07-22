import { FC } from "react";
import './PrivacyPolicy.scss'
const PrivacyPolicy: FC = () => {
	return (
		<div className="privacy-policy">
			<div className="privacy-policy__container">
				<div className="privacy-policy__row">
					<h1 className="privacy-policy__main-title">Privacy Policy</h1>
					<div className="privacy-policy__text">
						Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
						sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
						eget pellentesque risus scelerisque a. Nam ac urna maximus, tempor
						magna et, placerat urna. Curabitur eu magna enim. Proin placerat
						tortor lacus, ac sodales lectus placerat quis.
					</div>
					<h3 className="privacy-policy__title">Security</h3>
					<div className="privacy-policy__text">
						Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
						sollicitudin ante a, gravida arcu. Nam fringilla molestie velit,
						eget pellentesque risus scelerisque.
					</div>
                    <div className="privacy-policy__title">Cookies</div>
                    <ul className="privacy-policy__list">
                        <li> Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam, sollicitudin.</li>
                        <li> Nam fringilla molestie velit, eget pellentesque risus scelerisque a
                        </li>
                    </ul>
                    
                    
				</div>
			</div>
		</div>
	);
};

export default PrivacyPolicy;
