import React from 'react'
import Chatscreen_sidebar from '../components/Chatscreen_sidebar'
import "./ChatScreen.css"

function ChatScreen() {
    return (
        <div className="chat">
            <div className="chat_body">
<Chatscreen_sidebar/>
                <div className="chat_chat">
                    i am the main chat
                </div>
            </div>

        </div>
    )
}

export default ChatScreen
