import { FC, useEffect, useMemo, useState } from "react";
import Filters from "../../components/Filters/Filters";
import ProductListItem from "../../components/ProductListItem/ProductListItem";
// import { useGetItemsQuery } from "../../redux/services/api";
import "./Shop.scss";
import { data } from "../../assets/db";
// import { Item } from "../../redux/services/api";
import { Item } from "../../assets/db";
import { number } from "yup";
import { Box, Skeleton } from "@mui/material";
const Shop: FC = () => {
	const [items, setItems] = useState<Item[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	// const { data, error, isLoading } = useGetItemsQuery();
	const [searchTerm, setSearchTerm] = useState<string>("");
	const [sortOption, setSortOption] = useState<string>("");
	const [priceRange, setPriceRange] = useState<number[]>([15.99, 34.99]);
	const [checkedSale, setCheckedSale] = useState<boolean>(false);
	const [checkedStock, setCheckedStock] = useState<boolean>(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setItems(data);
			setLoading(false);
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	const filteredItems = useMemo(() => {
		let filtered: Item[] = [];

		if (data) {
			filtered = data.filter(
				(item) =>
					item.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
					item.price >= priceRange[0] &&
					item.price <= priceRange[1] &&
					(!checkedSale || item.onSale) &&
					(!checkedStock || item.inStock)
			);
		}

		//switch

		// Сортировка
		const sortedItems = [...filtered];
		if (sortOption === "1") {
			sortedItems.sort((a, b) => a.title.localeCompare(b.title));
		} else if (sortOption === "2") {
			sortedItems.sort((a, b) => b.title.localeCompare(a.title));
		} else if (sortOption === "3") {
			sortedItems.sort((a, b) => a.price - b.price);
		} else if (sortOption === "4") {
			sortedItems.sort((a, b) => b.price - a.price);
		}

		return sortedItems;
	}, [data, searchTerm, sortOption, priceRange, checkedSale, checkedStock]);

	// if (isLoading) return <div>Loading...</div>;
	// if (error) return <div>Error: {error.toString()}</div>;
	return (
		<div className="shop">
			<div className="shop__container">
				<div className="shop__inner">
					<div className="shop__title title">Shop The Latest</div>

					<div className="shop__row">
						<div className="shop__filter">
							<Filters
								setSortOption={setSortOption}
								searchTerm={searchTerm}
								setSearchTerm={setSearchTerm}
								priceRange={priceRange}
								setPriceRange={setPriceRange}
								setCheckedSale={setCheckedSale}
								setCheckedStock={setCheckedStock}
							/>
						</div>
						<div className="shop__box">
							<div className="shop__wrapper">
								{loading
									? [...new Array(6)].map((_, i) => (
											<Box
												key={i}
                                                sx={{
                                                    display: 'grid',
                                                    gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                                                    gap: ' 0 55px',
                                                    '@media (max-width: 950px)': {
                                                      gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                                    },
                                                  }}
											>
												<Skeleton
													sx={{ borderRadius: 4,
                                                        width: '100%', // Ширина в соответствии с шириной колонки грида
                                                        height: 240,
                                                        '@media (max-width: 420px)': {
                                                          height: 190, // Адаптивная высота для мобильных устройств
                                                        },
                                                     }}
													variant="rectangular"
                                                    
												/>
												<Skeleton width="50%" sx={{ mt: 1 }} />
												<Skeleton width="20%" sx={{ mt: 1 }} />
											</Box>
									  ))
									: filteredItems?.length! > 0 &&
									  filteredItems?.map((item) => (
											<ProductListItem item={item} key={item.id} />
									  ))}
							</div>
							{!filteredItems ||
								(filteredItems.length === 0 && (
									<h2 className="no">No such products</h2>
								))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Shop;
