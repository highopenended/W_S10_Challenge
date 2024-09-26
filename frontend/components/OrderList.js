import React from 'react'
import { useGetOrdersQuery } from '../state/ordersApi'
import { useState } from 'react'



export default function OrderList() {  
  const { data: orders } = useGetOrdersQuery()
  
  const [sizeFilter, setSizeFilter]=useState("All")

  let key=0
  function getKey(){
    key++
    return key
  }


  function sizeFilterClickHandler(evt){
    setSizeFilter(evt.target.textContent)
    console.log(evt.target.textContent)

  }


  return (
    <div id="orderList">
      <h2>Pizza Orders</h2>
      <ol>
        {
          orders?.map(order => {
            return (              
              <li key={getKey()}>
                <div>
                  {
                    `${order.customer} ordered a size ${order.size} with ${order.toppings.length} topping${order.toppings.length>1 ? 's' : ''}`
                  }
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
