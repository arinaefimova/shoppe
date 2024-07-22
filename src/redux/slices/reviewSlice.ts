// src/slices/reviewSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Review {
    author: string;
    date: string;
    content: string;
    rating: number;
}

export interface ReviewsState {
    name: string;
    comment: string;
    rating: number;
    error: boolean;
    textError: string | null;
    reviewsAdd: Record<string, Review[]>;
}

const initialState: ReviewsState = {
    name: '',
    comment: '',
    rating: 0,
    error: false,
    textError: null,
    reviewsAdd: {},
};

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            const value = action.payload;
            const regex = /^[a-zA-Z]*$/;

            if (!regex.test(value)) {
                state.error = true;
            } else {
                state.error = false;
                state.name = value;
            }
        },
        setComment(state, action: PayloadAction<string>) {
            const value = action.payload;
            state.comment = value;

            if (value.length <= 10) {
                state.textError = 'Comment must be more than 10 characters long';
            } else {
                state.textError = null;
            }
        },
        setRating(state, action: PayloadAction<number>) {
            state.rating = action.payload;
        },
        addReview(state, action: PayloadAction<{ id: number, review: Review }>) {
            const { id, review } = action.payload;
            if (!state.reviewsAdd[id]) {
                state.reviewsAdd[id] = [];
            }
            state.reviewsAdd[id].push(review);
        },
        resetForm(state) {
            state.name = '';
            state.comment = '';
            state.rating = 0;
        }
    }
});

export const { setName, setComment, setRating, addReview, resetForm } = reviewSlice.actions;
export default reviewSlice.reducer;
