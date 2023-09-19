import { configureStore } from '@reduxjs/toolkit'
import currencyReducer from './features/currency/currencySlice'
import languageReducer from './features/language/languageSlice'
import findPlaceSlice from '../features/hero/findPlaceSlice'
import userSlice from './features/user/userSlice'


export const store = configureStore({
  reducer: {
    currency: currencyReducer,
    language: languageReducer,
    hero: findPlaceSlice,
    user: userSlice
  },
})