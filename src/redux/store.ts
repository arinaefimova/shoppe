import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Использование localStorage для хранения состояния
import themeReducer from './slices/themeSlice';
import cartReducer from './slices/cartSlice';
import { api } from './services/api';
import reviewReducer from './slices/reviewSlice';

// Конфигурация persist
const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'cart', 'reviews'], // Список редьюсеров, которые нужно сохранять
};

// Создание persist редьюсера
const persistedReducer = persistReducer(persistConfig, combineReducers({
  theme: themeReducer,
  [api.reducerPath]: api.reducer,
  cart: cartReducer,
  reviews:reviewReducer,
}));

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

// Создание persistor
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
