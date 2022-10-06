import React from 'react'
import '../Styles/Navbar.css'
import logo from '../assets/Instagram_logo.svg.png'
import {BsMessenger,BsFillFileEarmarkPlusFill,BsFillHouseFill} from 'react-icons/bs'
// import {RiHome5Fill} from 'react-icons/ri'
import {FaCompass,FaHeart} from 'react-icons/fa'
// import likeIcon from '../assets/Like-Icon-SVG-098uknjdkfdf.svg'
// import discovery from '../assets/navigation-Icon-SVG-0iklfgdfd.svg'
// import home from '../assets/Instagram-Home-Icon-n3fd2.svg'
const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="logo">
        <img src={logo} alt="ig logo" />  
      </div>
      <div className="search-input">
        <input type="text" placeholder='Search'/>
      </div>
      <div className="icon-bars">
        <div className="home-icon">
          <BsFillHouseFill size={25}/>
        </div>
        <div className="message-icon">
          <BsMessenger size={25}/>
        </div>
        <div className="post-icon">
          <BsFillFileEarmarkPlusFill size={25}/>
        </div>
        <div className="discover-icon">
          <FaCompass size={25}/>
        </div>
        <div className="like-icon">
          <FaHeart size={25}/>
        </div>
      </div>
    </div>
  )
}

export default Navbar