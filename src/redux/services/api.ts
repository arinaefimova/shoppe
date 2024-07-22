import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export interface Review {
    author: string;
    date: string;
    content: string;
    rating: number; // от 1 до 5
  }
export interface Item {
    id: number;
    image: string;
    title: string;
    price: number;
    onSale: boolean;
    inStock: boolean;
    discount: number | null;
    category: string;
    reviews: Review[];
  }

export const api = createApi({
  reducerPath: 'api',//по какому адресу в нашем store будут храниться данные
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getItems: builder.query<Item[], void>({ ///query-получение
      query: () => 'http://localhost:3000/items',
    }),
  }),
});

export const { useGetItemsQuery } = api;

export type GetItemsQueryResult = ReturnType<typeof api.endpoints.getItems.useQuery>;
