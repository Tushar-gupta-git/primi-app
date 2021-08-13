import React from 'react'
import Chatscreen_chat from '../components/Chatscreen_chat'
import Chatscreen_sidebar from '../components/Chatscreen_sidebar'
import "./ChatScreen.css"

function ChatScreen() {
    return (
        <div className="chat">
            <div className="chat_body">
<Chatscreen_sidebar/>
<Chatscreen_chat/>

                </div>
            </div>

    )
}

export default ChatScreen
