import React from 'react'
import './index.css'

const EachElement = props => {
  const {eachItem} = props

  return (
    <div>
      <ul>
        <li className="items">
          <span> Ord No :{eachItem.orderNumber}</span>
          <br />
          <span> {eachItem.orderDate}</span>
          <br />
          <span>{eachItem.city}</span>
          <br />
          <span>Status :{eachItem.status}</span>
        </li>
      </ul>
    </div>
  )
}

export default EachElement
