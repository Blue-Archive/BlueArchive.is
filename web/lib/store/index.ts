import { Action, configureStore, EnhancedStore, ThunkAction } from '@reduxjs/toolkit';
import { createWrapper, MakeStore } from 'next-redux-wrapper';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { persistedReducer } from './modules';

const devMode = process.env.NODE_ENV === 'development';

const middlewareOptions = {
  serializableCheck: {
    ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  },
};

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(middlewareOptions),
  devTools: devMode,
});

const setupStore = (_context: any): EnhancedStore => store;

const makeStore: MakeStore<typeof store> = (context: any) => setupStore(context);

export const wrapper = createWrapper<AppStore>(makeStore, {
  debug: devMode,
});

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
