import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useParams, useNavigate } from "react-router-dom";
import "./style.css";
const socket = io.connect("http://localhost:8080");

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const { email } = useParams();
  const token = JSON.parse(localStorage.getItem("user"));
  const inputRef = useRef(null);
  const msgListref = useRef(null);
  const navigate = useNavigate();

  const getInfo = async (token) => {
    if (email) {
      const res = await axios.get(
        "http://192.168.0.102:8080/messages/email/" + email,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const messages = res.data.messages;
      setMessages(messages);
      return messages;
    }
    const res = await axios.get("http://192.168.0.102:8080/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(res.data.messages);
    return;
  };

  let handleSumbitMessage = async (e) => {
    e.preventDefault();
    var message = { body: inputRef.current.value };
    try {
      var res = await axios.post("http://localhost:8080/messages", message, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if ((res.data.success = true)) {
        const newMessage = res.data.body;

        socket.emit("user_message", newMessage);
        inputRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const eventListener = (newMessage) => {
      setMessages((messages) => [...messages, newMessage]);
    };
    socket.on("new_message", eventListener);
    return () => socket.off("new_message", eventListener);
  }, [messages]);

  const getUser = async () => {
    if (!token) {
      alert("You need to login before using the chat.");
      navigate("/login");
    } else {
      await getInfo(token);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (msgListref && msgListref.current) {
      const element = msgListref.current
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: 'smooth'
      })
    }

  }, [msgListref,messages])
  
  return (
    <>
      <div className="messagesContainer">
        <ul ref={msgListref} id="messages">
          {messages ? (
            messages.map((message) => {
              return (
                <li className="messages__user">
                  {message.email}:
                  <li className="messages__user-message">{message.body}</li>{" "}
                </li>
              );
            })
          ) : (
            <li className="messages__user">No messages</li>
          )}
        </ul>
        <form id="form" onSubmit={handleSumbitMessage}>
          <input
            id="input"
            type="text"
            ref={inputRef}
            autoComplete="off"
            name="message"
          />
          <button type="submit" className="messages_btn">
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Chat;
