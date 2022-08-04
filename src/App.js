
import './App.css';
import Sidebar from './Sidebar';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import Mail from './Mail';
import { useDispatch } from 'react-redux'
import { login, logout } from './features/UserSlice'
import EmailList from './EmailList';
import SendMessage from './SendMessage';
import {selectsendmessage} from "./features/sendMessage"
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import Login from './Login';
import { auth, provider } from './firebase'
import { useEffect } from 'react';
function App() {
  const dispatch=useDispatch()
  const sendmail =useSelector(selectsendmessage)
  const user=useSelector(selectUser)
  useEffect(()=>{
auth.onAuthStateChanged(user=>{
  if(user){
    dispatch(login({
      displayName:user.displayName,
      email:user.email,
      photoURL:user.photoURL,
  }))
  }
})
  },[])
  return (
    <Router>
   {!user? <Login/>
   
  
  :
  <div className="app">
     <Header/>
     <div className="app-body">
     <Sidebar/>
     <Routes>
     <Route path="/Mail" element={<Mail/>}></Route>
     <Route path="/" element={<EmailList/>}></Route>
     </Routes>
     </div>
     {sendmail && 
     <SendMessage/>
     }
     
    </div>
  
  }
    
   
    </Router>
  );
}

export default App;
