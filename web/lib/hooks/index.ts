import { shallowEqual, TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export function useShallowSelector<TState = unknown, TSelected = unknown>(
  selector: (state: TState) => TSelected
): TSelected {
  return useSelector(selector, shallowEqual);
}
