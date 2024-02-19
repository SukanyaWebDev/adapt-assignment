/* eslint-disable no-plusplus */
import React, {Component} from 'react'
import './index.css'
import EachElement from '../EachElement/index'

const statuses = [
  {id: 1, name: 'Pending'},
  {id: 2, name: 'Accepted'},
  {id: 3, name: 'AWS Created'},
  {id: 4, name: 'Ready to Ship'},
  {id: 5, name: 'Shipped'},
  {id: 6, name: 'Completed'},
  {id: 7, name: 'Cancelled'},
]

const cities = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Miami',
  'San Francisco',
  'Seattle',
]

function getRandomStatus() {
  return statuses[Math.floor(Math.random() * statuses.length)]
}

function getRandomDate() {
  const start = new Date(2023, 0, 1)
  const end = new Date()
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime()),
  )
    .toISOString()
    .split('T')[0]
}

function getRandomCity() {
  return cities[Math.floor(Math.random() * cities.length)]
}

class OrdersTab extends Component {
  state = {
    ordersList: [],
    activeTab: '',
  }

  componentDidMount() {
    this.generateOrders()
  }

  generateOrders = () => {
    const orders = []
    for (let i = 0; i < 50; i++) {
      const order = {
        id: i,
        orderNumber: `ORD${i + 1}`,
        orderDate: getRandomDate(),
        city: getRandomCity(),
        status: getRandomStatus().name, // Get the status name directly
      }
      orders.push(order)
    }
    this.setState({ordersList: orders})
  }

  getData = id => {
    console.log(id)
    this.setState({activeTab: id})
  }

  render() {
    const {ordersList, activeTab} = this.state
    let filteredOrders = ordersList

    if (activeTab) {
      filteredOrders = ordersList.filter(
        order =>
          order.status ===
          statuses.find(status => status.id === activeTab).name,
      )
    }

    return (
      <div>
        <div className="tabs-list">
          {statuses.map(eachItem => (
            <button
              type="button"
              key={eachItem.id}
              onClick={() => this.getData(eachItem.id)}
            >
              {eachItem.name}
            </button>
          ))}
        </div>
        <div>
          {filteredOrders.map(eachItem => (
            <EachElement key={eachItem.id} eachItem={eachItem} />
          ))}
        </div>
      </div>
    )
  }
}

export default OrdersTab
