import Header from '../Header'
import NavigationBar from '../NavigationBar'
import OrdersTab from '../OrdersTab'

import './index.css'

const Home = () => (
  <div className="main-container">
    <Header />
    <div className="bottom-container">
      <div className="for-navigation">
        <NavigationBar />
      </div>
      <div className="for-disply-orders">
        <div className="orders-list-of-tabs">
          <OrdersTab />
        </div>
      </div>
    </div>
  </div>
)

export default Home
