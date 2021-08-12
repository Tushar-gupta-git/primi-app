import React from 'react'
import "./Chatscreen_sidebar.css"
import { Avatar, IconButton } from '@material-ui/core';
import { SearchOutlined } from '@material-ui/icons';
function Chatscreen_sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar_header">
                <IconButton>
<Avatar/>
                </IconButton>
                Tushar gupta

            </div>
            <div className="sidebar_search">
                <SearchOutlined/>
                <input type="text" placeholder="Search For Chat" />

            </div>
            <div className="sidebar_chat">

            </div>
           
        </div>
    )
}

export default Chatscreen_sidebar
