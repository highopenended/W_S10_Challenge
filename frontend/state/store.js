import { configureStore } from '@reduxjs/toolkit'
import { ordersApi } from './ordersApi'
import sizeFilterReducer from './sizeFilterSlice'

// const exampleReducer = (state = { count: 0 }) => {
//   return state
// }

export const resetStore = () => configureStore({
  reducer: {
    sizeFilterState:sizeFilterReducer,
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    ordersApi.middleware,
  ),
})

export const store = resetStore()

