import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setFullName, setSize, toggleCheckbox } from '../state/formValuesSlice'
import { useCreateOrderMutation } from '../state/ordersApi'

export default function PizzaForm() {
  const dispatch = useDispatch()
  const {fullName, size, toppings} = useSelector(st => st.formValuesState)
  const [createOrder, {
    error: createOrderError,
    isLoading: createOrderLoading,
  }] = useCreateOrderMutation()


  if(createOrderError){
    console.log(createOrderError.data.message)
  }
  
  
  function nameChangeHandler(evt){
    dispatch(setFullName(evt.target.value))
  }
  function sizeChangeHandler(evt){
    dispatch(setSize(evt.target.value))
  }
  function checkboxClickHandler(evt){
    dispatch(toggleCheckbox({index:(evt.target.name-1), checked:evt.target.checked}))
  }

  function submitHandler(evt){
    evt.preventDefault()
    const toppingsList=toppings.filter(cbox=>cbox.selected).map(cbox=>cbox.name)
    const newOrder={
      fullName:fullName,
      size:size,
      toppings:toppingsList}

    createOrder(newOrder)
  }

  return (
    <form>
      <h2>Pizza Form</h2>
      {/* {true && <div className='pending'>Order in progress...</div>} */}
      {/* {true && <div className='failure'>Order failed: fullName is required</div>} */}
      
      {createOrderLoading && <div className='pending'>Order in progress...</div>}
      {createOrderError && <div className='failure'>Order failed: fullName is required</div>}

      <div className="input-group">
        <div>
          <label htmlFor="fullName">Full Name</label><br />
          <input
            data-testid="fullNameInput"
            id="fullName"
            name="fullName"
            placeholder="Type full name"
            type="text"
            value={fullName}
            onChange={(e)=>nameChangeHandler(e)}
          />
        </div>
      </div>

      <div className="input-group">
        <div>
          <label htmlFor="size">Size</label><br />
          <select data-testid="sizeSelect" id="size" name="size" value={size} onChange={(e)=>sizeChangeHandler(e)}>
            <option value="">----Choose size----</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
          </select>
        </div>
      </div>

      <div className="input-group">
        <label>
          <input data-testid="checkPepperoni" name="1" type="checkbox" checked={toppings[0].selected} onChange={(e)=>checkboxClickHandler(e)} />
          Pepperoni<br /></label>
        <label>
          <input data-testid="checkGreenpeppers" name="2" type="checkbox" checked={toppings[1].selected} onChange={(e)=>checkboxClickHandler(e)} />
          Green Peppers<br /></label>
        <label>
          <input data-testid="checkPineapple" name="3" type="checkbox" checked={toppings[2].selected} onChange={(e)=>checkboxClickHandler(e)} />
          Pineapple<br /></label>
        <label>
          <input data-testid="checkMushrooms" name="4" type="checkbox" checked={toppings[3].selected} onChange={(e)=>checkboxClickHandler(e)}/>
          Mushrooms<br /></label>
        <label>
          <input data-testid="checkHam" name="5" type="checkbox" checked={toppings[4].selected} onChange={(e)=>checkboxClickHandler(e)}/>
          Ham<br /></label>
      </div>
      <input data-testid="submit" type="submit" onClick={(e)=>submitHandler(e)} />
    </form>
  )
}
