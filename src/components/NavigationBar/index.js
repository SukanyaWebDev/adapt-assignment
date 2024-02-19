import {
  AiOutlineDashboard,
  AiFillDatabase,
  AiTwotoneTag,
  AiFillCar,
  AiOutlineLink,
} from 'react-icons/ai'
import './index.css'

const NavigationBar = () => (
  <div className="navigation-container">
    <div className="menu-items">
      <AiOutlineDashboard />
      <p>Dashboard</p>
    </div>
    <div className="menu-items">
      <AiTwotoneTag />
      <p>Inventory</p>
    </div>
    <div className="menu-items">
      <AiFillDatabase />
      <p>Orders</p>
    </div>
    <div className="menu-items">
      <AiFillCar />
      <p>shipping</p>
    </div>
    <div className="menu-items">
      <AiOutlineLink />
      <p>Channel</p>
    </div>
  </div>
)

export default NavigationBar
