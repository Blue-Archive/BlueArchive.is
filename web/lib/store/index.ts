import { Action, configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import counterReducer from './counterSlice';

const devMode = process.env.NODE_ENV === 'development';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  devTools: devMode,
});

const setupStore = (context: any): EnhancedStore => store;

const makeStore: MakeStore<typeof store> = (context: any) => setupStore(context);

export const wrapper = createWrapper(makeStore, {
  debug: devMode,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
