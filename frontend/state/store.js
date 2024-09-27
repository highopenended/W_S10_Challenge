import { configureStore } from '@reduxjs/toolkit'
import { ordersApi } from './ordersApi'
import sizeFilterReducer from './sizeFilterSlice'
import formValuesReducer from './formValuesSlice'

export const resetStore = () => configureStore({
  reducer: {
    sizeFilterState:sizeFilterReducer,
    formValuesState:formValuesReducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    ordersApi.middleware,
  ),
})

export const store = resetStore()

