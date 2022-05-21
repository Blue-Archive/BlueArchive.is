import { AnyAction, combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import localizeCharProfile from './localizeCharProfileSlice';

const persistConfig = {
  key: 'root',
  storage,
};

export const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    return { ...state, ...action.payload };
  }
  return combineReducers({
    localizeCharProfile,
  })(state, action);
};

export const persistedReducer = persistReducer(persistConfig, reducer);
