import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button,IconButton} from '@mui/material';
import "./Sidebar.css"
import InboxIcon from '@mui/icons-material/Inbox';
import SidebarOptions from './SidebarOptions';
import StarIcon from '@mui/icons-material/Star';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import NearMeIcon from '@mui/icons-material/NearMe';
import NoteIcon from '@mui/icons-material/Note';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PersonIcon from '@mui/icons-material/Person';
import DuoIcon from '@mui/icons-material/Duo';
import PhoneIcon from '@mui/icons-material/Phone';
import { useHistory } from 'react-router-dom';
import {selectsendmessage,Closesend,Openthesend} from "./features/sendMessage"
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
function Sidebar() {
 
const dispatch =useDispatch()
const OpenSendMail =()=>{
  dispatch(Openthesend())
}
  return (
    <div className="sidebar">
    
    <Button  startIcon={<AddIcon />} className="compose" onClick={()=>OpenSendMail()}>
  compose
</Button>
<SidebarOptions title="Inbox" Icon={InboxIcon} number={54} selected={true}/>
<SidebarOptions title="Stared" Icon={StarIcon} number={54}/>
<SidebarOptions title="Snozed" Icon={AccessTimeIcon} number={54}/>
<SidebarOptions title="Important" Icon={LabelImportantIcon} number={54}/>
<SidebarOptions title="Sent" Icon={NearMeIcon} number={54}/>
<SidebarOptions title="Draft" Icon={NoteIcon} number={54}/>
<SidebarOptions title="More" Icon={ExpandMoreIcon} number={54}/>
<div className="sidefooter">
<div className="sidebarfooter__icon">
<IconButton>
<PersonIcon/>
</IconButton>
<IconButton>
<DuoIcon/>
</IconButton>
<IconButton>
<PhoneIcon/>
</IconButton>
</div>
</div>
</div>
   
  )
}

export default Sidebar