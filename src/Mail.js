import { IconButton } from '@mui/material'
import React from 'react'
import "./Mail.css"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import MoveToInboxIcon from '@mui/icons-material/MoveToInbox';
import ErrorIcon from '@mui/icons-material/Error';
import DeleteIcon from '@mui/icons-material/Delete';
import EmailIcon from '@mui/icons-material/Email';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import PrintIcon from '@mui/icons-material/Print';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useHistory } from 'react-router-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectedMail } from './features/sendMessage';
function Mail() {
  const slectedmail=useSelector(selectedMail)
  return (
    <div className="Mail">
    <div className="Mail__Tools">
    <div className="Main__toolsleft">
    <IconButton>
   <Link to="/"><ArrowBackIcon  /></Link> 
    </IconButton>
    <IconButton>
    <MoveToInboxIcon/>
    </IconButton>
    <IconButton>
    <ErrorIcon/>
    </IconButton>
    <IconButton>
    <DeleteIcon/>
    </IconButton>
    <IconButton>
    <EmailIcon/>
    </IconButton>
    <IconButton>
    <WatchLaterIcon/>
    </IconButton>
    <IconButton>
    <CheckCircleIcon/>
    </IconButton>
    <IconButton>
    <LabelImportantIcon/>
    </IconButton>
    <IconButton>
    <MoreVertIcon/>
    </IconButton>
    </div>
    <div className="Main__toolsright">
    <IconButton>
    <UnfoldMoreIcon/>
    </IconButton>
    <IconButton>
    <PrintIcon/>
    </IconButton>
    <IconButton>
    <ExitToAppIcon/>
    </IconButton>
    
    </div>
    </div>
    <div className="Mail__body">
    <div className="Mail__bodyheader">
    <h2>{slectedmail?.subject}</h2>
    <LabelImportantIcon className="Mail__icon"/>
    <p>{slectedmail?.title}</p>
    <p className="Mail__time">{slectedmail?.time}</p>
    </div>
    <div className="Mail__message">
    <p>{slectedmail?.description}</p>
    </div>
    </div>
    </div>
  )
}

export default Mail