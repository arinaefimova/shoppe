import { FC } from "react";
import "./ProductListItem.scss";
import { PiShoppingCartLight } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import { Link, useParams } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/slices/cartSlice";
import { toast, ToastContainer } from "react-toastify";

type Item = {
	id: number;
	image: string;
	title: string;
	price: number;
	onSale: boolean;
	inStock: boolean;
	discount: number | null;
    category: string;
};

type ProductListItemProps = {
	item: Item;

};

const ProductListItem: FC<ProductListItemProps> = ({ item }) => {
    const addItem=()=>{
        dispatch(addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: 1,
            image: item.image,
            category:item.category
        }))
        toast.success(`${item.title} is added`)
    }
    const dispatch = useAppDispatch();
	return (
		<div className="item-product">
			<div className="item-product__image">
				<img src={item.image} alt={item.title} />
                {item.discount && <div className="item-product__discount">-{item.discount}%</div>}
				<div className="item-product__actions">
					
                        <div onClick={()=>addItem()} >
                            <PiShoppingCartLight
                             className="icon" size={21} />
                        </div>
					<Link  to={`/shop/${item.id}`}>
						<IoEyeOutline className="icon" size={21} />
					</Link>
				</div>
			</div>
			<Link to={`/shop/${item.id}`}>
                <h3 className="item-product__title">{item.title}</h3>
            </Link>
			<div className="item-product__price">${item.price.toFixed(2)}</div>
            <ToastContainer
         position="top-left"
         autoClose={2000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="light"

     />
		</div>
         

	);
};

export default ProductListItem;
