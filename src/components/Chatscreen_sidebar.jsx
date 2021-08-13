import React, { useEffect, useState } from "react";
import "./Chatscreen_sidebar.css";
import { Avatar, IconButton } from "@material-ui/core";
import { SearchOutlined } from "@material-ui/icons";
import Sidebarchats from "../Componentsofcomponents/Sidebarchats";
import { db } from "../firebase";
function Chatscreen_sidebar() {
  const [rooms, setrooms] = useState([]);
  useEffect(() => {
    db.collection("rooms").onSnapshot(snapshot=>setrooms(snapshot.docs.map(doc=>({
        key:doc.id,
        id:doc.id,
        data:doc.data()
    }))))
  }, []);
console.log(rooms)

  return (
    <div className="sidebar">
      <div className="sidebar_header">
        <IconButton>
          <Avatar />
        </IconButton>
        Tushar gupta
      </div>
      <div className="sidebar_search">
        <SearchOutlined />
        <input type="text" placeholder="Search For Chat" />
      </div>
      <div className="sidebar_chat">
        <Sidebarchats />
        {rooms.map((room) => (
          <Sidebarchats name={room.data.name} key={room.id} id={room.id} />
        ))}
 
      </div>
    </div>
  );
}

export default Chatscreen_sidebar;
