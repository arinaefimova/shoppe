import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import CartItem from "../../components/CartItem/CartItem";
import "./Cart.scss";
import { PiSmileySadBold } from "react-icons/pi";
import { ImBin } from "react-icons/im";
import { clearCart } from "../../redux/slices/cartSlice";
const Cart: FC = () => {
	const cart = useAppSelector((state) => state.cart.cart);
	const totalPrice = useAppSelector((state) => state.cart.totalPrice);
	const shipping: number = 10;
    const dispatch = useAppDispatch()
	return (
		<div className="cart">
			<div className="cart__container">
				<div className="cart__wrapper">
					<div className="cart__title">Shopping Cart</div>
					{cart.length > 0 && (
						<div className="cart__clear">
							Clear Cart: <ImBin  onClick={()=>dispatch(clearCart())}/>
						</div>
					)}
					<div className="cart__list">
						{cart.length > 0 ? (
							cart.map((item) => {
								return (
									<CartItem
										quantity={item.quantity}
										key={item.id}
                                        id={item.id}
										title={item.title}
										image={item.image}
										price={item.price}
										category={item.category}
									/>
								);
							})
						) : (
							<div className="cart__empty">
								No products added <PiSmileySadBold />
							</div>
						)}
					</div>
                    {cart.length > 0 && (
                   
					<div className="cart__info info-cart">
						<div className="info-cart__title">Cart totals</div>
						<div className="info-cart__inner">
							<div className="info-cart__subtotal">
								<span>Subtotal:</span> <div>${totalPrice.toFixed(2)}</div>
							</div>
							<div className="info-cart__shipping">
								<span>Shipping: </span>{" "}
								{cart.length > 0 ? <div>${shipping}.00</div> : <div>$0</div>}
							</div>
						</div>
						<div className="info-cart__total">
							<span>Total: </span>
							{cart.length > 0 ? (
								<div>${(totalPrice + shipping).toFixed(2)}</div>
							) : (
								<div>$0</div>
							)}
						</div>
						<div className="info-cart__btn-wrapper">
							<button className="info-cart__btn">PROCEED TO CHECKOUT</button>
						</div>
					</div>
                         )}
				</div>
			</div>
		</div>
	);
};

export default Cart;
