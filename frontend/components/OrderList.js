import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useGetOrdersQuery } from '../state/ordersApi'
import { setSizeFilter } from '../state/sizeFilterSlice'

export default function OrderList() {  
  const { data: orders } = useGetOrdersQuery()

  const {sizeFilter} = useSelector(st => st.sizeFilterState)
  const dispatch = useDispatch()

  let key=0
  function getKey(){
    key++
    return key
  }


  function sizeFilterClickHandler(evt){
    dispatch(setSizeFilter(evt.target.textContent))
  }

  function getToppingsMessage(order){
    let toppingsMsg
    if(order.toppings){
      toppingsMsg=`${order.customer} ordered a size ${order.size} with ${order.toppings.length} topping${order.toppings.length>1 ? 's' : ''}`
    }else{
      toppingsMsg=`${order.customer} ordered a size ${order.size} with no toppings` 
    }
    return toppingsMsg
  }

  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.map(order => {
            return (
              (order.size===sizeFilter || sizeFilter === "All") &&
              <li key={getKey()}>
                <div>
                  {getToppingsMessage(order)}
                </div>
              </li>
            )
          })
        }
      </ol>
      <div id="sizeFilters">
        Filter by size:
        {
          ['All', 'S', 'M', 'L'].map(size => {
            const className = `button-filter${size === sizeFilter ? ' active' : ''}`
            
            return <button
              data-testid={`filterBtn${size}`}
              className={className}
              key={size}
              onClick={(e)=>sizeFilterClickHandler(e)}
              >
                {size}
              </button>
          })
        }
      </div>
    </div>
  )
}
