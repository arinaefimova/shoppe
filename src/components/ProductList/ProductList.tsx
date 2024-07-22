import { FC, useEffect, useState } from "react";
import "./ProductList.scss";
import ProductListItem from "../ProductListItem/ProductListItem";
// import { useGetItemsQuery } from "../../redux/services/api";
import { Link } from "react-router-dom";
import { Skeleton, Box } from "@mui/material";
import { data, Item } from "../../assets/db";
const ProductList: FC = () => {
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

	return (
		<div className="product-list">
			<div className="product-list__container">
				<div className="product-list__row">
					<div className="product-list__header">
						<div className="product-list__title title">Shop The Latest</div>
						<Link to="/shop">
							<div className="product-list__all">View All</div>
						</Link>
					</div>
					<div className="product-list__items">
						{loading
							? [...new Array(6)].map((_, i) => (
									<Box
										key={i}
                                        sx={{
                                            display: 'grid',
                                            gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
                                            gap: ' 0 55px',
                                            '@media (max-width: 420px)': {
                                              gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))',
                                            },
                                          }}
										
									>
										<Skeleton
											sx={{
                                                borderRadius: 4,
                                                width: '100%', // Ширина в соответствии с шириной колонки грида
                                                height: 380,
                                                '@media (max-width: 420px)': {
                                                  height: 290, // Адаптивная высота для мобильных устройств
                                                },
                                              }}
											variant="rectangular"
											
										/>
										<Skeleton width="50%" sx={{ mt: 1 }} />
										<Skeleton className="qerty" width="20%" sx={{ mt: 1 }} />
									</Box>
							  ))
							: data?.map((item, i) => {
									return <ProductListItem item={item} key={i} />;
							  })}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductList;
