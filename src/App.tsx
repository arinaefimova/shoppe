import { FC } from "react";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop/Shop";
import Blog from "./Pages/Blog/Blog";
import OurStory from "./Pages/OurStory/OurStory";
import NotFound from "./Pages/NotFound/NotFound";
import Footer from "./components/Footer/Footer";
import Cart from "./Pages/Cart/Cart";
import PrivacyPolicy from "./Pages/PrivacyPolicy/PrivacyPolicy";
import OwnProduct from "./Pages/OwnProduct/OwnProduct";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
const App: FC = () => {
	return (
		<>
			<ScrollToTop>
				<Header />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/shop" element={<Shop />} />
					<Route path="/shop/:id" element={<OwnProduct />} />
					<Route path="/blog" element={<Blog />} />
					<Route path="/our-story" element={<OurStory />} />
					<Route path="/*" element={<NotFound />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="/privacy-policy" element={<PrivacyPolicy />} />
				</Routes>
				<Footer />
			</ScrollToTop>
		</>
	);
};

export default App;
