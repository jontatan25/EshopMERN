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
      try {
        const res = await axios.get(
          "http://192.168.0.105:8080/messages/email/" + email,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const messages = res.data.messages;
        setMessages(messages);
        return messages;
      } catch (error) {
        switch (error.response.status) {
          case 403:
            alert("Session expired, redirecting to login..");
            localStorage.removeItem("user");
            navigate("/login");
            break;
          default:
            console.log(error);
            break;
        }
      }
    }
    try {
      const res = await axios.get("http://192.168.0.105:8080/messages", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setMessages(res.data.messages);
      return;
    } catch (error) {
      switch (error.response.status) {
        case 403:
          alert("Session expired, redirecting to login..");
          localStorage.removeItem("user");
          navigate("/login");
          break;
        default:
          console.log(error);
          break;
      }
    }
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
      console.log(newMessage);
      if (messages) {
        setMessages((messages) => [...messages, newMessage]);
      } else setMessages([newMessage]);
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
      const element = msgListref.current;
      element.scroll({
        top: element.scrollHeight,
        left: 0,
        behavior: "smooth",
      });
    }
  }, [msgListref, messages]);

  return (
    <>
      <div className="messagesContainer">
        <ul ref={msgListref} id="messages">
          {messages ? (
            messages.map((message) => {
              return (
                <li key={message.id} className="messages__user">
                  {message.email}:
                  <li className="messages__user-message">{message.body}</li>
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
