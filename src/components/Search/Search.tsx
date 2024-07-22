import  { FC, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { MdCloseFullscreen } from "react-icons/md";
import './Search.scss'
const Search:FC = () => {
    const[showInp, setShoInp] = useState<boolean>(false)
	return (
		<div
			className={
				showInp ? "search show" : "search"
			}
		>
			<input type="text" placeholder="search..." />
			{showInp ? (
				<MdCloseFullscreen
					className="icon"
					onClick={() => setShoInp((prev) => !prev)}
				/>
			) : (
				<IoIosSearch
					onClick={() => setShoInp((prev) => !prev)}
					className="icon"
					size={19}
				/>
			)}
		</div>
	);
};

export default Search;
