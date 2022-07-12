import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import {useLocation} from "react-router-dom"
import "./style.css"
const socket = io.connect("http://localhost:8080");

const Chat = ({messagesToGet}) => {
  const [messages, setMessages] = useState([]);
  const search = useLocation().search;
  const emailFromParams = new URLSearchParams(search).get('email');
  
  const getInfo = async () => {
    if (messagesToGet === "email") {
      const res = await axios.get("http://192.168.0.104:8080/messages/email/"+emailFromParams)
      setMessages(res.data.messages)
      return
    }
    const res = await axios.get("http://192.168.0.104:8080/messages");
    setMessages(res.data.messages);
  };

  useEffect(() => {
    getInfo();
  }, [messages]);

  useEffect(() => {
      socket.on("new_message", () => {
        getInfo();
      });
  }, [socket]);

  const inputRef = useRef(null);
  const sendMessage = (e) => {
    e.preventDefault();
    socket.emit("send_message", { message: inputRef.current.value });
  };

  const getUser = async () => {
    const user = JSON.parse(localStorage.getItem("user"))
    if (!user) {
      alert("You need to login before using the chat.")
      window.open("http://192.168.0.104:3000/login","_self")
    } 
  };
  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   socket.on("receive_message",(data)=>{
  //     alert(data.message)
  //   })
  // }, [socket])


  return (
    <>
      <ul id="messages">
        {messages.map((message) => {
          return <li className="messages__user">{message.email}:<li className="messages__user-message">{message.body}</li> </li>;
        })}
      </ul>
      <form id="form" action="">
        <input
          id="input"
          type="text"
          ref={inputRef}
          autoComplete="off"
          name="message"
        />
        <button onClick={sendMessage}>Send</button>
      </form>
    </>
  );
};

export default Chat;
