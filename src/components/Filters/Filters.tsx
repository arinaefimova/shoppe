import { FC, useCallback } from "react";
import { Select, Slider, Switch } from "antd";
import { IoIosSearch } from "react-icons/io";
import "./Filters.scss";

type FilterProps = {
	searchTerm: string;
	setSearchTerm: (term: string) => void;
	setSortOption: (value: string) => void;
	priceRange: number[];
	setPriceRange: (value: number[]) => void;
    setCheckedSale:(checked:boolean)=>void;
    setCheckedStock:(checked:boolean)=>void;
};

const Filters: FC<FilterProps> = ({
	searchTerm,
	setSearchTerm,
	setSortOption,
	priceRange,
	setPriceRange,
	setCheckedSale,
	setCheckedStock,
   
}) => {
	const handleClick = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setSearchTerm(e.target.value);
		},
		[setSearchTerm]
	);
	const onHandlePriceChange = (value: number[]) => {
		setPriceRange(value);
	};
	const onChangeCheckedSale = (checked: boolean) => {
		setCheckedSale(checked);
	};
	const onChangeCheckedStock = (checked: boolean) => {
		setCheckedStock(checked);
	};

	return (
		<div className="filters">
			<div className="filters__wrapper">
				<div className="filters__input">
					<input
						value={searchTerm}
						onChange={(e) => handleClick(e)}
						type="text"
						placeholder="search..."
					/>
					<button>
						<IoIosSearch size={20} />
					</button>
				</div>
				<Select
					showSearch
					style={{ width: "100%", height: "53px" }}
					placeholder="Sort By"
					optionFilterProp="label"
					onChange={setSortOption}
					filterSort={(optionA, optionB) =>
						(optionA?.label ?? "")
							.toLowerCase()
							.localeCompare((optionB?.label ?? "").toLowerCase())
					}
					options={[
						{
							value: "1",
							label: "from A to Z",
						},
						{
							value: "2",
							label: "from Z to A",
						},
						{
							value: "3",
							label: "min price",
						},
						{
							value: "4",
							label: "max price",
						},
					]}
				/>
				<div className="filters__range">
					<Slider
						onChange={onHandlePriceChange}
						range={{ draggableTrack: true }}
						min={15.99}
						max={34.99}
						defaultValue={priceRange}
					/>
					<div className="filters__range-content range-content">
						<div className="range-content__price">
							Price: ${priceRange[0].toFixed(2)} - ${priceRange[1].toFixed(2)}
						</div>
						<div className="range-content__text">Filter</div>
					</div>
				</div>
				<div className="filters__switch switch-filters">
					<div className="switch-filters__col">
						<div className="switch-filters__title">On sale</div>
						<Switch
							onChange={onChangeCheckedSale}
							
							defaultChecked={false}
						/>
					</div>
					<div className="switch-filters__col">
						<div>On stock</div>
						<Switch onChange={onChangeCheckedStock}  />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Filters;
