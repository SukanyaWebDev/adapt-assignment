// import {IoMoonOutline} from 'react-icons/io5'
// import {LiaLanguageSolid} from 'react-icons/li'
// import {FaRegBell} from 'react-icons/fa'
import {AiFillBulb, AiFillMediumSquare, AiOutlineBell} from 'react-icons/ai'
import './index.css'

const Header = () => (
  <div className="header-container">
    <div>
      <img
        src="https://adaptnxt.com/wp-content/uploads/2020/11/adaptnxt-final_purple-square.png"
        alt="logo"
        className="logo-image"
      />
    </div>
    <ul className="unordered-container-icons">
      <AiFillBulb className="icon-image" />
      <AiFillMediumSquare className="icon-image" />
      <AiOutlineBell className="icon-image" />
    </ul>
  </div>
)

export default Header
