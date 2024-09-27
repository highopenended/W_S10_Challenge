import { createSlice } from '@reduxjs/toolkit'

const sizeFilterSlice = createSlice({
  name: 'sizeFilter',
  initialState: {
    sizeFilter: "All"
  },
  reducers: {
    setSizeFilter(state, action){
      state.sizeFilter=action.payload
    }
  }
})

export default sizeFilterSlice.reducer
export const {  
  setSizeFilter,
} = sizeFilterSlice.actions