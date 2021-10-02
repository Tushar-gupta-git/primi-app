import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import "./Chatscreen_chat.css";
function Chatscreen_chat() {
    const [input , setinput]= useState("")
    const [roomname , setroomname]= useState("")
    const{roomid}=useParams()
    useEffect(()=>{
      if(roomid){
        db.collection("rooms").doc(roomid).onSnapshot(snap=>setroomname(snap.data().name))
      }

    },[roomid])
    const sendmessage=(e)=>{
        e.preventDefault()
        setinput("")
        

    }

  return (
    <div className="chatscreen_chat">
      <div className="chatscreen_header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="chat_headerinfo">
          <h2>{roomname}</h2>
          <p>last seen...</p>
        </div>
        <div className="chat_headerright">
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className="chatscreen_body">
          Body of the chat
      </div>
      <div className="chatscreen_footer">
         
          <InsertEmoticon/>
          <form>
          <input value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder="Message..." type="text" />
          <button type="submit"  onClick={sendmessage}>Send a message</button>
          </form>
          <Mic/>

      </div>
    </div>
  );
}

export default Chatscreen_chat;
