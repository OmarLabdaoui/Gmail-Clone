import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { login } from './features/UserSlice'
import { auth, provider } from './firebase'
import "./Login.css"
function Login() {
    const dispatch =useDispatch()
    const signin=()=>{
auth.signInWithPopup(provider).then(({user})=>{
    dispatch(login({
        displayName:user.displayName,
        email:user.email,
        photoURL:user.photoURL,
    }))
})
    }
  return (
    <div className="login">

        <div className="login__img">
            <img src="https://static.dezeen.com/uploads/2020/10/gmail-google-logo-rebrand-workspace-design_dezeen_2364_col_0.jpg" alt=""/>
            <Button variant="contained" color="primary" onClick={()=>signin()}>Login</Button>
        </div>
    </div>
  )
}

export default Login