import { Rate } from "antd";
import "./InfoOwn.scss";
import { MdOutlineMailOutline } from "react-icons/md";
import { BiLogoFacebook } from "react-icons/bi";
import { IoLogoInstagram } from "react-icons/io";
import { AiOutlineTwitter } from "react-icons/ai";
import { FC, useState } from "react";
import { addToCart } from "../../redux/slices/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
interface Review {
    author: string;
    date: string;
    content: string;
    rating: number; // от 1 до 5
  }
export interface InfoOwnProps {
	item: {
		id: number;
		image: string;
		title: string;
		price: number;
		onSale: boolean;
		inStock: boolean;
		discount: number | null;
        category: string;
        reviews: Review[];
	};
}

const InfoOwn:FC<InfoOwnProps> = ({item}) => {
    const [currentCount, setCurrentCount] = useState<number>(1)
    const dispatch = useAppDispatch();
    const decreaseCount=()=>{
        if(currentCount ===1){
            setCurrentCount(1)
        }
        else{
            setCurrentCount(prev=>prev-1)
        }
       
    }
    const addItem=()=>{
        dispatch(addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            quantity: currentCount,
            image: item.image,
            category:item.category
        }))
        setCurrentCount(1)
        toast.success(`${item.title} is added`)
    }

	return (
        <>
		<div className="info-own">
			<div className="info-own__header">
				<div className="info-own__title">{item.title}</div>
				<div className="info-own__price">$ {item.price.toFixed(2)}</div>
			</div>
			<div className="info-own__rating">
				<div className="info-own__stars">
					<Rate
						style={{ color: "var(--main-text-color)", fontSize: "18px" }}
						disabled
						defaultValue={item.reviews[0].rating}
					/>
				</div>
				<div className="info-own__reviews">{item.reviews.length} reviews</div>
			</div>
			<p className="info-own__description">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
				placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
				maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
				consequat sed eu felis.
			</p>

			<div className="info-own__actions">
				<div className="info-own__calc calc">
					<button className="calc__action calc__minus"onClick={()=>decreaseCount()} > -</button>
					<span className="calc__number">{currentCount}</span>
					<button className="calc__action calc__plus"onClick={()=>setCurrentCount(prev=>prev+1)} > +</button>
				</div>
				<button onClick={()=>addItem()} className="info-own__add-to-cart">Add to Cart</button>
			</div>
			<div className="info-own__socials">
				<MdOutlineMailOutline size={20} className="icon" />
				<BiLogoFacebook size={21} className="icon" />
				<IoLogoInstagram size={21} className="icon" />
				<AiOutlineTwitter size={21} className="icon" />
			</div>
			<div className="info-own__info">
				<div className="info-own__info-item">
					<div className="info-own__info-label">SKU:</div>
					<div className="info-own__info-value">12</div>
				</div>
				<div className="info-own__info-item">
					<div className="info-own__info-label">Category:</div>
					<div className="info-own__info-value">{item.category}</div>
				</div>
			</div>
		</div>
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
        </>

	);
};

export default InfoOwn;
