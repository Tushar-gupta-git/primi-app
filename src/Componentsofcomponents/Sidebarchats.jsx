import { Avatar} from "@material-ui/core";
import React from "react";
import { db } from "../firebase";
import "./Sidebarchats.css";
import{ Link }from "react-router-dom"
function Sidebarchats({ name, id }) {
  const addchat = (e) => {
    const roomname = prompt("please enter the name of the chat");
    if (roomname) {
      db.collection("rooms").add({
        name: roomname,
      });
    }
  };

  return name ? (
    <Link to={`/chat/${id}`}>
      <div className="Sidebarchat">
        <Avatar />
        <div className="sidebarchat_info">
          <h2>{name}</h2>
          <p>last message....</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="Sidebarchat">
      <div onClick={addchat} className="addchat">
        <h2>Add New Chat</h2>
      </div>
    </div>
  );
}

export default Sidebarchats;
