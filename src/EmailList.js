import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import {useState,useEffect} from "react"
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RedoIcon from '@mui/icons-material/Redo';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardIcon from '@mui/icons-material/Keyboard';
import SettingsIcon from '@mui/icons-material/Settings';
import InboxIcon from '@mui/icons-material/Inbox';
import PeopleIcon from '@mui/icons-material/People';
import SellIcon from '@mui/icons-material/Sell';
import "./EmailList.css"
import Section from './Section';
import Email from './Email';

import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function EmailList() {
  const [emails,setEmails]=useState([])

  useEffect(() => {
   db.collection('Email').onSnapshot((snapchot)=>setEmails(snapchot.docs.map((doc)=>({
    id:doc.id,
      data:doc.data(),
   }))    
   )
   );
  },[]);
  return (
    <div className='EmailList'>
    <div className="Emaillist__icon">
    <div className="Emaillist__iconleft">
<Checkbox/>
<IconButton>
<ArrowDropDownIcon/>
</IconButton>
<IconButton>
<RedoIcon/>
</IconButton>
<IconButton>
<MoreVertIcon/>
</IconButton>

    </div>
    <div className="Emaillist__iconright">
    <IconButton>
<ChevronLeftIcon/>
</IconButton>
<IconButton>
<ChevronRightIcon/>
</IconButton>
<IconButton>
<KeyboardIcon/>
</IconButton>
<IconButton>
<SettingsIcon/>
</IconButton>
    </div>
    </div>
    <div className="Email__section">
    <Section Icon={InboxIcon}  title="primary" color="red" selected />
    <Section Icon={PeopleIcon}  title="Social" color="blue"  />
    <Section Icon={SellIcon}  title="Promotion" color="green"  />
    </div>
     <div className="Email__List">
      {emails.map(({id,data:{to,subject,message,timestamp}})=>(
    <Email id={id} key={id} title={to} subject={subject} description={message} time={new Date(timestamp?.seconds*1000).toUTCString()}/>

      ))}
    <Email time="10pm" title="Omar@gmail.com" subject="Hello and Welcome To Gmail Clone" description="On Fire"/>
    <Email time="10pm" title="Omar@gmail.com" subject="Hello and Welcome To Gmail Clone" description="On Fire"/>
   
    </div>
   
    </div>
    
  )
}

export default EmailList