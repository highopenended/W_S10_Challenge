import { createSlice } from '@reduxjs/toolkit'

const formValuesSlice = createSlice({
  name: 'formValues',
  initialState: {
    fullName: "",
    size:"----Choose size----",
    toppings:[
        {selected:false, name:"1" },
        {selected:false, name:"2"},
        {selected:false, name:"3"},
        {selected:false, name:"4"},
        {selected:false, name:"5"},
    ],
  },
  reducers: {
    resetForm(state){
        state.fullName=''
        state.size=''
        state.toppings.map(topping=>{
            topping.selected=false
        })
    },
    setFullName(state, action){
      state.fullName=action.payload
    },
    setSize(state, action){
        state.size = action.payload
    },
    toggleCheckbox(state,action){
        const {index}=action.payload
        console.log(index)
        state.toppings[index].selected=!state.toppings[index].selected
    }
  }
})

export default formValuesSlice.reducer
export const {
    resetForm,
    setFullName,
    setSize,
    toggleCheckbox,
} = formValuesSlice.actions