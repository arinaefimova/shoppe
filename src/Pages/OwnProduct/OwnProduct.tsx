import { FC, useEffect, useState } from "react";
import "./OwnProduct.scss";
import { useParams } from "react-router-dom";
import ThumbSlider from "../../components/ThumbSlider/ThumbSlider";
import InfoOwn from "../../components/InfoOwn/InfoOwn";
import OwnTabs from "../../components/OwnTabs/OwnTabs";
// import { useGetItemsQuery } from "../../redux/services/api";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
import { data, Item } from "../../assets/db";
import { Spin } from "antd";
import { LoadingOutlined } from '@ant-design/icons';
const OwnProduct: FC = () => {
	const { id } = useParams<{ id: string }>();
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	// const { data, error, isLoading } = useGetItemsQuery();
	useEffect(() => {
		const timer = setTimeout(() => {
			setItems(data);
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);
	const item = data.find((item) => item.id.toString() === id);

	const similarItems = item
		? data.filter((i) => i.category === item.category)
		: [];

	return (
		<div className="own-product">
			<div className="own-product__container">
				{!item || loading ? (
					<div className="spin"><Spin indicator={<LoadingOutlined spin />} size="large" /></div>
				) : (
					<>
						<div className="own-product__row">
							<ThumbSlider image={item.image} />

							<div className="own-product__info">
								<InfoOwn item={item} />
							</div>
						</div>
						<div className="own-product__inner">
							<OwnTabs title={item.title} reviews={item.reviews} id={item.id} />
						</div>
						<div className="similar">
							<div className="similar__title title-reviews">Similar Items</div>
							<div className="similar__list">
								{similarItems?.map((similar, index) => (
									<ProductListItem key={index} item={similar} />
								))}
							</div>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default OwnProduct;
