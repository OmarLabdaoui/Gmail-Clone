import { Checkbox, IconButton } from '@mui/material'
import React from 'react'
import "./Email.css"
import LabelIcon from '@mui/icons-material/Label';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { slectMail } from './features/sendMessage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
function Email({title,time,subject,description}) {
    const dispatch=useDispatch()
    const slected=()=>{
      dispatch(slectMail({
        title,
        time,
        subject,
        description
      }))
      
    }
  return (
    <Link className="link" to="/Mail"> <div  className="Email" onClick={()=>slected()}>
    <div className="Email__left">
    <Checkbox/>
    <IconButton>
    <LabelIcon/>
    </IconButton>
    <IconButton>
    <StarOutlineIcon/>
    </IconButton>
    </div>
    <h3 className="Email__title">
    {title}
    </h3>
    <div className="Email__center">
    <h4 >{subject}{"  "}
    <span className="span">-{description}</span>
    </h4>
    
    </div>
    <div className="Email__right">
    {time}
    </div>
    </div>
    </Link>
  )
}

export default Email