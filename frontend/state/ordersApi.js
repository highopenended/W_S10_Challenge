import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const ordersApi = createApi({
  reducerPath: 'ordersApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:9009/api/pizza/' }),
  endpoints: builder => ({
    getOrders: builder.query({
      query: () => 'history',
    }),
  })
})

export const {
    useGetOrdersQuery,
} = ordersApi