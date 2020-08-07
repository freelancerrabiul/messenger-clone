import React, { useState, useEffect } from 'react';
import {  FormControl , Input } from '@material-ui/core';
import './App.css';
import './Message.css';
import Message from './Message.js';
import db from './firebase';
import firebase from 'firebase';
import FlipMove  from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
 const [input,setInput] = useState('');
 const [messages,setMessages] =useState([

  ]);
  const [username,setUsername] =useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc=> ({id:doc.id, message: doc.data()})))
    })
  }, [] )


 
 useEffect(() => {
  setUsername(prompt('please Enter your name'))

 },[] )
 
 const sendMessage =(event) =>{
   event.preventDefault();//-->stop refresh
   //whenever click button it will  trigger and start a event
   db.collection('messages').add({
     message:input,
     username:username,
     timestamp:firebase.firestore.FieldValue.serverTimestamp()
   })
  setInput('')
  
 }

  return (
    <div className="App">
      
      
      <img src="data:image/jpeg;base64,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" alt="me"/>
       <h1>goovla :created by Rabiul</h1>       
       <h2>Welcome {username} </h2>
      

       <form className="app__form">
       <FormControl className="app__formControl" >
        
        <Input className="app__input" placeholder='inter your message...' value ={input} onChange={event => setInput(event.target.value)}/>      
        
        <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type='submit' onClick={sendMessage}>
          <SendIcon />
        </IconButton >       
       </FormControl>
        </form>    

        <FlipMove>
        {
        messages.map(({id, message}) =>(
         <Message key={id} username={username} message={message} />
        
        ))

       }


        </FlipMove>

       
    </div>
  );
}

export default App;
