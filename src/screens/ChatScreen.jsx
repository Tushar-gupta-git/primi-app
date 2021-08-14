import React from "react";
import Chatscreen_chat from "../components/Chatscreen_chat";
import Chatscreen_sidebar from "../components/Chatscreen_sidebar";
import "./ChatScreen.css";
import { Switch, Route, Link } from "react-router-dom";

function ChatScreen(props) {
  return (
      
   
      <div className="chat">
        <div className="chat_body">
           <Chatscreen_sidebar />
          <Switch>
             <Route path="/chat/:roomid" component={Chatscreen_chat}/>
          </Switch>
        </div>
      </div>
    
  );
}

export default ChatScreen;
