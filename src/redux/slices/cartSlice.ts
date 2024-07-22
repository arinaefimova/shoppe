
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    title: string;   
    price: number;
    quantity: number;
    image: string;
    id: number;
    category: string;
 }
 

 export interface CartState {
    cart: CartItem[];
    totalPrice: number;
    totalQuantity: number;
}
const initialState: CartState = {
    cart: [],
    totalQuantity: 0,
    totalPrice: 0
};

export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.cart.find(item => item.id === action.payload.id);
            if(!existingItem){
                state.cart.push(action.payload)
                state.totalQuantity+=action.payload.quantity
                state.totalPrice+=action.payload.price*action.payload.quantity
            }
            else{
                existingItem.quantity+=action.payload.quantity
                state.totalQuantity+=action.payload.quantity
                state.totalPrice+=action.payload.price*action.payload.quantity
            }
        },
        decreaseQuantity: (state, action: PayloadAction<number>) =>{
            const currentItem = action.payload//id
            const newItem = state.cart.find(item => item.id ===currentItem)
            if(newItem){
                if(newItem.quantity === 1){
                    newItem.quantity=1
                }
                else{
                    newItem.quantity--
                    state.totalQuantity--
                    state.totalPrice-=newItem.price
                }
            }

        },
        increaseQuantity: (state, action: PayloadAction<number>) =>{
            const currentItem = action.payload//id
            const newItem = state.cart.find(item => item.id ===currentItem)
            if(newItem){
                newItem.quantity++
                state.totalQuantity++
                state.totalPrice+=newItem.price
            }
        },
        clearCart:(state)=>{
            state.cart=[];
            state.totalQuantity=0;
            state.totalPrice=0;
        },
        removeFromCart:(state,action:PayloadAction<number>)=>{
            const itemId = action.payload
            const itemToRemove = state.cart.find(item => item.id === itemId);

            if (itemToRemove) {
                // Уменьшить общую стоимость и количество
                state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
                state.totalQuantity -= itemToRemove.quantity;
        
                // Обновить корзину, удалив элемент
                state.cart = state.cart.filter(item => item.id !== itemId);
            }
            

        }

    }
})

export const {addToCart, increaseQuantity, decreaseQuantity, clearCart, removeFromCart} = cartSlice.actions 
export default cartSlice.reducer


// Создаем слайс для корзины
