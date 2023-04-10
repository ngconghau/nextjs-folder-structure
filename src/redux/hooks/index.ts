import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from '../store';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useHtxDispatch = () => useDispatch<AppDispatch>();
export const useHtxSelector: TypedUseSelectorHook<RootState> = useSelector;