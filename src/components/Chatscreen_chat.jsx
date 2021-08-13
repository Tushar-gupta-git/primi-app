import { Avatar, IconButton } from "@material-ui/core";
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from "@material-ui/icons";
import React from "react";
import { useState } from "react";
import "./Chatscreen_chat.css";
function Chatscreen_chat() {
    const [input , setinput]= useState("")
    const sendmessage=(e)=>{
        e.preventDefault()
        // console.log(input)
        setinput("")
        

    }
  return (
    <div className="chatscreen_chat">
      <div className="chatscreen_header">
        <IconButton>
          <Avatar />
        </IconButton>
        <div className="chat_headerinfo">
          <h2>sendername</h2>
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
          i am the chat body
      </div>
      <div className="chatscreen_footer">
         
          <InsertEmoticon/>
          <form>
          <input value={input} onChange={(e)=>{setinput(e.target.value)}} placeholder="Message..." type="text" />
          <button type="submit"  onClick={sendmessage}>send a message</button>
          </form>
          <Mic/>

      </div>
    </div>
  );
}

export default Chatscreen_chat;
