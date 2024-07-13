import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '.'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispath: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook  <RootState> = useSelector;