import React, { FC } from 'react';
import './CartItem.scss'
import { IoMdClose } from 'react-icons/io';
import { useAppDispatch } from '../../redux/hooks';
import { decreaseQuantity, increaseQuantity, removeFromCart } from '../../redux/slices/cartSlice';
export interface CartProps{
    title: string;
    image: string;
    price: number;
    category: string;
    quantity:number;
    id: number;

}

const CartItem:FC<CartProps> = ({title, image, category, price, quantity, id}) => {
    const dispatch = useAppDispatch()
    const inc=(id:number)=>{
        dispatch(increaseQuantity(id))
    }
    const dec=(id:number)=>{
        dispatch(decreaseQuantity(id))
    }
    return (
        <div className='cart-item'>
           <div className="cart-item__wrapper">
            <div className="cart-item__image">
                <img src={image} alt=""/>
            </div>
            <div className="cart-item__inner">
                <div className="cart-item__content">
                    <div className="cart-item__title">{title}</div>
                    <div className="cart-item__category">{category}</div>
                    <div className="cart-item__price">${price}</div>
                </div>
                <div className="cart-item__calc calc">
                                    <button className="calc__action calc__minus" onClick={()=>dec(id)}> -</button>
                                    <span className="calc__number">{quantity}</span>
                                    <button className="calc__action calc__plus" onClick={()=>inc(id)} > +</button>
                            </div>
                
            </div>
            
           <IoMdClose className='close' onClick={()=>dispatch(removeFromCart(id))} />
           </div>
           
        </div>
    );
}

export default CartItem;
