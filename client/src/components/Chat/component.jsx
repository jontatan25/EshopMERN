import React, { useRef, useEffect, useState } from "react";
import axios from "axios";
import io from "socket.io-client";
import { useLocation } from "react-router-dom";
import "./style.css";
const socket = io.connect("http://localhost:8080");

const Chat = ({ messagesToGet }) => {
  const [messages, setMessages] = useState([]);
  const search = useLocation().search;
  const emailFromParams = new URLSearchParams(search).get("email");
  const token = JSON.parse(localStorage.getItem("user"));
  const inputRef = useRef(null);

  const getInfo = async (token) => {
    if (messagesToGet === "email") {
      const res = await axios.get(
        "http://192.168.0.104:8080/messages/email/" + emailFromParams,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const messages = res.data.messages;
      setMessages(messages);
      return messages;
    }
    const res = await axios.get("http://192.168.0.104:8080/messages", {
      headers: { Authorization: `Bearer ${token}` },
    });
    setMessages(res.data.messages);
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
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    socket.on("new_message", (newMessage) => {
      setMessages((messages) => [...messages, newMessage]);
    });
  }, [socket]);

  const getUser = async () => {
    if (!token) {
      alert("You need to login before using the chat.");
      window.open("http://192.168.0.104:3000/login", "_self");
    } else {
      getInfo(token);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ul id="messages">
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
    </>
  );
};

export default Chat;
