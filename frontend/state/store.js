import { configureStore } from '@reduxjs/toolkit'
import { ordersApi } from './ordersApi'

// const exampleReducer = (state = { count: 0 }) => {
//   return state
// }

export const resetStore = () => configureStore({
  reducer: {
    [ordersApi.reducerPath]: ordersApi.reducer,
  },
  middleware: getDefault => getDefault().concat(
    ordersApi.middleware,
  ),
})

export const store = resetStore()

