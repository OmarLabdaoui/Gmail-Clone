import React from 'react'
import "./SendMessage.css"
import CloseIcon from '@mui/icons-material/Close';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import {selectsendmessage,Closesend,Openthesend} from "./features/sendMessage"
import { useDispatch, useSelector } from 'react-redux';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
function SendMessage() {
    const dispatch = useDispatch()
    const closeSendMail=()=>{
        dispatch(Closesend())
    }
    const {register,handleSubmit ,watch,formState: { errors }}=useForm()
    const onSubmit =(data)=>{
console.log(data)
db.collection("Email").add({
    to:data.to,
    subject:data.subject,
    message:data.message,
    timestamp:firebase.firestore.FieldValue.serverTimestamp(),
})
dispatch(Closesend())
    }
  return (
    <div className='SendMessage'>
<div className="SendMessage__header">
<h3>New Message</h3>
<CloseIcon className="close" onClick={()=>closeSendMail()}/>
</div>
<form onSubmit={handleSubmit(onSubmit)}>
<input type="text" placeholder='to' name='to' 
{...register('to', { required: true })} />
{errors.to && (<p className="errors_message">This field is required</p>)}
<input type="text" placeholder="Subject" name='subject' 
 {...register('subject', { required: true })}/>
 {errors.subject && (<p className="errors_message">This field is required</p>)}
<input type="text" placeholder="Message..." className="inputt" name='message' 
{...register('message', { required: true })}

 />
 {errors.message && (<p className="errors_message">This field is required</p>)}
 
<div className="SendMessage__bottom">
    <Button className="sendmessagebutton"
     variant='contained'
     color='primary'
     type='submit'
    
    >Send</Button>
</div>
</form>
    </div>
  )
}

export default SendMessage