import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import "./Header.css"
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from './features/UserSlice';
import { auth } from './firebase';
function Header() {
  const dispatch=useDispatch();
  const user=useSelector(selectUser)
  const signout=()=>{
    auth.signOut().then(()=>{
      dispatch(logout())
    })
    
  }
  return (
    <div className="Header">
    <div className="Header__left">
    <IconButton>
    <MenuIcon/>
    </IconButton>
    <img src="https://upload.wikimedia.org/wikipedia/commons/archive/0/0a/20201023123348%21Gmail_logo.png?uselang=fr" alt="" />
    </div>
    <div className="header__center">
    <SearchIcon className="searchicon"/>
    <input type="search" placeholder="Search"/>
<ExpandMoreIcon/>
    </div>
    <div className="Header__right">
    <IconButton>
    <AppsIcon/>
    </IconButton>
    <IconButton>
    <NotificationsIcon/>
    </IconButton>
    <Avatar src={user?.photoURL} onClick={()=>signout()}/>
    </div>
    </div>
  )
}

export default Header